use std::process::exit;
use reedline::{Reedline, Signal};

use crate::prompt::{get_prompt_string, CustomPrompt};
use crate::executor::execute_command;
use crate::completer::CustomCompleter;

struct Shell {
    line_editor: Reedline,
    history: Vec<String>,
}

impl Shell {
    fn new() -> Self {
        let completer = Box::new(CustomCompleter::new());
        let line_editor = Reedline::create().with_completer(completer);
        Self {
            line_editor,
            history: Vec::new(),
        }
    }

    fn print_history(&self) {
        for (i, entry) in self.history.iter().enumerate() {
            println!("{}  {}", i + 1, entry);
        }
    }

    fn run(&mut self) {
        loop {
            let prompt = CustomPrompt {
                prompt: get_prompt_string(),
            };
            
            match self.line_editor.read_line(&prompt) {
                Ok(Signal::Success(input)) => {
                    let trimmed_input = input.trim();
                    if trimmed_input == "exit" {
                        exit(0);
                    } else if trimmed_input == "history" {
                        self.print_history();
                    } else {
                        // Add command to history if it's not empty
                        if !trimmed_input.is_empty() {
                            self.history.push(trimmed_input.to_string());
                        }
                        execute_command(&input);
                    }
                }
                Ok(Signal::CtrlD) | Ok(Signal::CtrlC) => {
                    println!();
                    exit(0);
                },
                Err(err) => {
                    eprintln!("Error: {}", err);
                    break;
                }
            }
        }
    }
}

pub fn run_shell() {
    let mut shell = Shell::new();
    shell.run();
}