use std::path::Path;
use reedline::{Completer, Suggestion, Span};
use std::fs;

pub struct CustomCompleter {
    commands: Vec<String>,
}

impl CustomCompleter {
    pub fn new() -> Self {
        let commands = vec![
            "exit".to_string(),
            "cd".to_string(),
            "ls".to_string(),
            "pwd".to_string(),
            "echo".to_string(),
            "history".to_string(),
        ];
        Self { commands }
    }
}

impl Completer for CustomCompleter {
    fn complete(&mut self, line: &str, pos: usize) -> Vec<Suggestion> {
        let input = &line[..pos];
        let words: Vec<&str> = input.split_whitespace().collect();
        
        if words.is_empty() {
            return self.commands
                .iter()
                .map(|cmd| Suggestion {
                    value: cmd.clone(),
                    description: None,
                    style: None,
                    extra: None,
                    span: Span::new(0, pos),
                    append_whitespace: true,
                })
                .collect();
        }

        // If we're completing the first word, suggest commands
        if words.len() == 1 {
            let word_start = pos - words[0].len();
            return self.commands
                .iter()
                .filter(|cmd| cmd.starts_with(words[0]))
                .map(|cmd| Suggestion {
                    value: cmd.clone(),
                    description: None,
                    style: None,
                    extra: None,
                    span: Span::new(word_start, pos),
                    append_whitespace: true,
                })
                .collect();
        }

        // For subsequent words, try file path completion
        let last_word = words.last().unwrap();
        let path = Path::new(last_word);
        let parent = path.parent().unwrap_or(Path::new("."));
        let prefix = path.file_name().map(|f| f.to_string_lossy().to_string()).unwrap_or_default();
        let word_start = pos - last_word.len();

        if let Ok(entries) = fs::read_dir(parent) {
            return entries
                .filter_map(|entry| entry.ok())
                .filter(|entry| {
                    entry.file_name()
                        .to_string_lossy()
                        .starts_with(&prefix)
                })
                .map(|entry| {
                    let path = entry.path();
                    let value = if path.is_dir() {
                        format!("{}/", path.display())
                    } else {
                        path.display().to_string()
                    };
                    Suggestion {
                        value,
                        description: None,
                        style: None,
                        extra: None,
                        span: Span::new(word_start, pos),
                        append_whitespace: true,
                    }
                })
                .collect();
        }

        Vec::new()
    }
} 