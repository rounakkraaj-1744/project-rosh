use std::process::exit;
use reedline::{Reedline, Signal};

use crate::prompt::{get_prompt_string, CustomPrompt};
use crate::executor::execute_command;

pub fn run_shell() {
    let mut line_editor = Reedline::create();

    loop {
        let prompt = CustomPrompt {
            prompt: get_prompt_string(),
        };
        
        match line_editor.read_line(&prompt) {
            Ok(Signal::Success(input)) => {
                if input.trim() == "exit" {
                    exit(0);
                }
                execute_command(&input);
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