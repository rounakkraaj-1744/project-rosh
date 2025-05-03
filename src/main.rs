// This file only contains the imports and calls of the other rs files

mod shell;
mod prompt;
mod executor;
mod customls;
extern crate colored;

fn main (){
    loop{
        shell::run_shell();
    }
}