use std::env;
use colored::*;
use reedline::{Prompt, PromptEditMode, PromptHistorySearch, Color as ReedlineColor};
use std::borrow::Cow;

pub struct CustomPrompt {
    pub prompt: String,
}

impl Prompt for CustomPrompt {
    fn render_prompt_left(&self) -> Cow<str> {
        Cow::Owned(self.prompt.clone())
    }

    fn render_prompt_right(&self) -> Cow<str> {
        Cow::Borrowed("")
    }

    fn render_prompt_indicator(&self, _prompt_mode: PromptEditMode) -> Cow<str> {
        Cow::Borrowed("")
    }

    fn render_prompt_multiline_indicator(&self) -> Cow<str> {
        Cow::Borrowed("")
    }

    fn render_prompt_history_search_indicator(&self, _history_search: PromptHistorySearch) -> Cow<str> {
        Cow::Borrowed("") 
    }

    fn get_prompt_color(&self) -> ReedlineColor {
        ReedlineColor::Reset
    }
}

pub fn get_prompt_string() -> String {
    let path = env::current_dir().unwrap_or_else(|_| "/".into());
    let home = env::var("HOME").unwrap_or_else(|_| "/".to_string());
    let short_path = path.display().to_string().replace(&home, "~");
    let username = env::var("USER").unwrap_or_else(|_| "user".to_string());

    let user = format!("{}", username.blue().bold());
    let shell = format!("{}", "rosh".green().bold());
    let path_display = format!("{}", short_path.yellow());
    let arrow = format!("{}", ">>".cyan().bold());

    format!("{}@{} ({}) {} ", user, shell, path_display, arrow)
}