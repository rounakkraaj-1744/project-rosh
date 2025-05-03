use std::fs;
use colored::*;

pub fn custom_ls(path: &str) {
    let entries = fs::read_dir(path).unwrap();
    for entry in entries {
    let entry = entry.unwrap();
    let file_name = entry.file_name();
    let file_name_str = file_name.to_string_lossy();
    let metadata = entry.metadata().unwrap();
    if metadata.is_dir() {
        print!("{}  ", file_name_str.blue().bold());
    }
    else if metadata.permissions().readonly() {
        print!("{}  ", file_name_str.red()); 
    }
    else {
        print!("{}  ", file_name_str.white());
    }

    println!();
    }
}