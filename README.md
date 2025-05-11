# 🦀 Rosh - Smart Shell

Rosh is a custom shell built in Rust 🦀, designed to be fast, modern, and extensible. Inspired by Unix shells but powered by the safety and concurrency of Rust, Rosh aims to bring productivity using GenAI tool and joy back to your terminal experience.

---

## ✨ Features (Completed)

* ✅ Custom shell prompt with dynamic info
* ✅ Command execution with `std::process::Command`
* ✅ Graceful exit on `Ctrl+C` / `Ctrl+D`
* ✅ Tab Completion using `reedline`
* ✅ Modular project structure
* ✅ Error handling for command execution
* ✅ Fancy prompt with `reedline::Prompt`

## 🚧 Planned Features

* 🔐 Login and Signup system (optional auth for shell commands)
* 🛒 Ability to purchase plugins or themes
* ⚙️ Plugin system for extending shell features
* 🪄 AI agent integratio
* 🧠 Shell history suggestions using ML
* 🧩 Auto-suggestion like Fish shell
* 🖼️ Themes & Color Schemes support
* 🧪 Built-in scripting support
* 💾 Session persistence and bookmarking
* 📜 Built-in help system

## 📁 Project Structure

```bash
rosh/
├── src/
│   ├── main.rs            # Entry point
│   ├── shell.rs           # Core loop and command execution
│   ├── prompt.rs          # Prompt customization
│   └── executor.rs        # Command execution logicmain.rs 
│   ├── customls.rs        # own custom ls command
├── Cargo.toml             # Dependencies and metadata
└── README.md              # You’re reading it! 📖
```

## 🚀 Installation

### Prerequisites

* Rust & Cargo installed ([https://rustup.rs](https://rustup.rs))

### Run for Development

```bash
git clone https://github.com/yourusername/rosh.git
cd rosh
cargo run
```

### Build for Production

```bash
cargo build --release
./target/release/rosh
```

You’re now using **Rosh**! 🎉

## 📄 Documentation

> Documentation site (coming soon!) will be built using **Next.js** or **Astro** depending on needs.

## 👨‍💻 Contributing

We welcome contributions! Feel free to open issues, suggest features, or submit PRs.

## 💬 Community

Join the dev discussions on GitHub Issues and stay tuned for a Discord or Matrix channel soon!

## 📝 License

Unlicensed

## ⚠️ Notice

This is an **open-source project**. You're free to use and contribute, but unauthorized copying or claiming this project as your own is **not allowed**. Please respect the license and give credit where it’s due. 🙏

---

Built with 💙 and 🦀
