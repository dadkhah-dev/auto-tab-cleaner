# 🧹 Auto Tab Cleaner - Chrome Extension

A modern Chrome extension that automatically closes your old and inactive tabs, helping you keep your browser fast and organized.

---

## 📦 Features

- ✅ **Auto-close inactive tabs** after a defined time (default: 30 minutes)
- 📝 **Whitelist** specific websites to exclude them from auto-closing
- 🔔 **Notification** before closing each tab
- 🔢 **Badge counter** shows the total number of tabs closed
- 📊 **Statistics dashboard** to monitor tab-cleaning history
- 🧠 Works with the new **Manifest V3** using `service_worker` and `chrome.alarms`

---

## ⚙️ How It Works

The extension checks all open tabs every 5 minutes. If a tab has been inactive for more than the configured time and is **not whitelisted**, it will:
1. Show a notification to the user
2. Close the tab
3. Update the badge and save stats locally

The logic runs via `chrome.alarms` to ensure background behavior remains consistent with Manifest V3.

---

## 🚀 Installation (for developers)

1. Clone or download this repository
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extension folder

---

## 🛠 Configuration

Go to the **Settings** tab in the extension popup:
- Set the number of **inactive minutes** (e.g. 30)
- Add domains to the **whitelist**
- View cleaning **stats** in the dashboard

---

## 📂 File Structure

```plaintext
.
├── background.js         # Service worker logic for closing tabs
├── options.html          # Setting UI (settings)
├── options.js            # Setting logic
├── dashboard.html        # Front-end dashboard
├── dashboard.js          # Front-end logic
├── styles.css            # Classic-modern styling
├── icons/                # Extension icons (16px, 48px, 128px)
├── manifest.json         # Manifest V3 config
└── README.md             # You are here!
```

## 🔒 Permissions

This extension requests the following permissions:

- `tabs`: To access and manage open browser tabs.
- `storage`: To save user preferences, whitelist, and tab statistics.
- `notifications`: To alert the user before automatically closing a tab.
- `alarms`: To schedule regular background checks for inactive tabs.


## 🧠 Notes

- Fully compliant with **Chrome Manifest V3**.
- All data and logic run locally in the browser — **no external servers** involved.
- Designed for **performance**, **stability**, and **privacy**.
- Background logic is triggered via `chrome.alarms` to ensure consistent behavior even when the extension is idle.


## 📢 Contributing

We welcome contributions!

- Feel free to fork the project, submit pull requests, or open issues.
- Suggestions for new features and bug fixes are highly appreciated.


## 📃 License

MIT License © 2025 – Saeid Dadkhah
