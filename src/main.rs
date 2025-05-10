// This file only contains the imports and calls of the other rs files

mod shell;
mod prompt;
mod executor;
mod customls;
mod completer;
extern crate colored;
extern crate reedline;

fn main (){
    loop{
        shell::run_shell();
    }
}