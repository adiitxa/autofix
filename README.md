# 🔧 react-autofix

Auto-saving input component for React forms — Automatically preserves user input even after page reload or form reset, giving a seamless and persistent experience.

---

## ✨ Features

- 🧠 Auto-saves form data to `localStorage`
- 🚀 Restores data on reload automatically
- 🪄 Works with file inputs and custom fields
- ⚙️ Lightweight, plug-and-play component
- 📦 Zero dependencies

---

## 📦 Installation

```bash
npm install react-autofix


🚀 Usage

```bash
import AutoSaveInput from 'react-autofix';

```bash
function App() {
  return (
    <form>
      <AutoSaveInput
        type="text"
        name="username"
        placeholder="Enter your name"
        label="Username"
      />
    </form>
  );
}


📃 License
MIT License © 2025 Aditya Gaikwad

