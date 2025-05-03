use std::env;
use std::io::{self, Write};
use colored::*;

pub fn show_prompt() {
    let path = env::current_dir().unwrap_or_else(|_| "/".into());
    let home = env::var("HOME").unwrap_or_else(|_| "/".to_string());
    let short_path = path.display().to_string().replace(&home, "~");
    let username = env::var("USER").unwrap_or_else(|_| "user".to_string());


    let user = username.blue().bold();
    let shell = "rosh".green().bold();
    let path_display = short_path.yellow();
    let arrow = ">>".cyan().bold();

    print!("{}@{} ({}) {} ", user, shell, path_display, arrow);
    io::stdout().flush().unwrap();
}


