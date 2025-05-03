use std::io::{self};
use std::process::exit;

use crate::prompt;
use crate::executor;

fn get_input() -> Option<String> {
    let mut input = String::new();
    if io::stdin().read_line(&mut input).is_err() {
        eprintln!("Failed to read line");
        return None;
    }

    let input = input.trim();
    if input.is_empty() {
        return None;
    }

    Some(input.to_string())
}

pub fn run_shell() {
    loop {
        prompt::show_prompt();

        match get_input() {
            Some(ref input) if input == "exit" => {
                exit(0);
            }
            Some(ref input) if input.is_empty() => continue,
            Some(input) => executor::execute_command(&input),
            None => continue,
        }
    }
}