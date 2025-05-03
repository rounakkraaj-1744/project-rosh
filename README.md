# 🮠 rosh — The Smart Rust Shell

A modern, blazing-fast, customizable shell built with Rust.  
Think `bash`, but smarter — with autocompletion, syntax highlighting, and AI assistance (coming soon).  
Designed for productivity, security, and pure rustacean joy.

---

## ⚙️ Features

### ✅ Core Shell
- [x] Execute external commands (`ls`, `git`, `echo`, etc.)
- [x] Built-in commands: `cd`, `exit`, `clear`, etc.
- [x] Command prompt with current directory and username
- [x] Dynamically updating prompt with current directory
- [x] Configurable prompt styles

### 🔁 Interactive Goodies
- [x] Command history (↑ ↓ keys)
- [x] Autocomplete (file paths & commands)
- [x] Syntax highlighting
- [x] Aliases & shortcuts

### 🧠 Smart Features (Advanced)
- [ ] Piping (`|`) and redirection (`>`, `<`)
- [ ] Background job support (`&`)
- [ ] Environment variable support
- [ ] Configurable themes and aliases (`.roshrc`)
- [ ] Plugin system
- [ ] AI-powered suggestions (via local/remote LLM)

---

## 🛠️ Installation

### 1. Install Rust

If you haven't already:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
```

### 2. Clone the repo

```bash
git clone https://github.com/rounakkraaj-1744/project-rosh.git
cd project-rosh
```

### 3. Build it

```bash
cargo build --release
```

### 4. Run it

```bash
cargo run
```

---

## 📁 Project Structure

```bash
rosh/
├── src/
│   ├── main.rs         # Entry point
│   ├── shell.rs        # Shell loop and REPL
│   ├── builtins.rs     # cd, exit, clear, etc.
│   ├── executor.rs     # External command execution
│   ├── parser.rs       # Command parsing & tokenizing
│   ├── prompt.rs       # Prompt styling and display
│   ├── config.rs       # Config & aliases (.roshrc)
│   └── utils.rs        # Helpers
├── .roshrc             # (Optional) User config file
├── README.md
└── Cargo.toml
```

---

## 📦 Dependencies

Major crates used:

- [`rustyline`](https://crates.io/crates/rustyline) – Line editing, history, autocomplete
- [`colored`](https://crates.io/crates/colored) – Terminal colors
- [`serde`](https://crates.io/crates/serde) – For config parsing
- [`nix`](https://crates.io/crates/nix) – POSIX system calls (piping, jobs, etc.)
- [`glob`](https://crates.io/crates/glob) – File path expansion
- [`dirs`](https://crates.io/crates/dirs) – Get home/config directory

Install all with:

```bash
cargo build
```

Or manually add to `Cargo.toml`.

---

## 📄 Config File (`.roshrc`)

Supports aliasing and theming:
```toml
[aliases]
ll = "ls -al"
gs = "git status"

[theme]
prompt_color = "cyan"
show_git_status = true
```

---

## 👩‍💼 Contributing

Pull requests and ideas welcome!

1. Fork it 🍴
2. Create your branch: `git checkout -b feature/foo`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/foo`
5. Submit a PR 🧙‍♂️

---

## 📚 Roadmap

### MVP
- [x] External command execution
- [x] Built-in commands
- [x] Basic REPL
- [x] Updating prompt based on directory

### Next
- [ ] Implement piping and redirection
- [ ] Add user configuration and aliases support
- [ ] Enhance autocomplete with fuzzy matching
- [ ] Persist command history across sessions
- [ ] Support environment variables
- [ ] Develop minimal plugin API
- [ ] Integrate AI features with local model
- [ ] Enable scripting with `.rosh` files

---

## 🧠 Inspiration

- Unix Philosophy 🐧
- Fish shell 🐠
- zsh, bash, nushell
- Rust’s fearless concurrency 🧰

---

## ⚖️ License

Unlicensed

