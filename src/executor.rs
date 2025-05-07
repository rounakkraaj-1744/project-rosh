use std::env;
use std::process::Command;
use crate::customls;

pub fn execute_command(input: &str) {
    let mut parts = input.split_whitespace();
    let command = parts.next().unwrap_or("");
    let mut args: Vec<&str> = parts.collect();

    if command == "clear"{
        print!("\x1B[2J\x1B[1;1H");
        return;
    }

    if command == "cd" {
        let new_dir = args.get(0).map_or("/", |d| *d);
        if let Err(e) = env::set_current_dir(new_dir) {
            eprintln!("cd: {}", e);
        }
        return;
    }

    if command == "ls" {
        customls::custom_ls(args.get(0).map_or(".", |d| *d));
        return;
    }

    if !args.iter().any(|&arg| arg.starts_with("--color")) {
        args.push("--color=auto");
    }

    let status = Command::new(command).args(&args).status();

    match status {
        Ok(status) => println!("Exited with: {}", status),
        Err(e) => println!("Error: {}", e),
    }
}
