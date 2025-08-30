# 🌟 DL.MING Fan Website

A static website built with **HTML, CSS, JavaScript, and Firebase** to introduce and celebrate **DL.MING**.  
The site provides fans with information, music, and an interactive **fan wall** to leave messages.

---

## 📌 Pages Overview
- **index.html** – Landing page / homepage
- **main.html** – Main navigation hub
- **information.html** – Biography and details about DL.MING
- **song.html** – Songs and music-related content
- **timeline.html** – Timeline of events and milestones
- **fanwall.html** – Interactive fan wall with Firebase integration (leave, edit, delete messages)

---

## 🚀 Features
- Responsive design with HTML, CSS, and JavaScript
- Firebase-powered **Fan Wall** for fans to:
  - Post anonymous messages
  - Edit or delete their own messages
  - Admins can moderate and delete any message
- Easy navigation across multiple sections
- Showcases DL.MING’s journey, songs, and achievements

---

## ⚙️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend / Database:** Firebase Realtime Database + Firebase Authentication  

---

## 📂 Project Structure
```
project-root/
│── index.html
│── main.html
│── information.html
│── song.html
│── timeline.html
│── fanwall.html
│── /css # Stylesheets
│── /js # JavaScript files
│ └── script.js # Contains Firebase config + logic
│── /images # Image assets
│── README.md
```

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dlming.git
   cd dlming-fan-website
2. **Setup & Installation**
    - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable Realtime Database & Authentication (Anonymous)
    - Copy your Firebase config and replace the placeholder in `script.js`
    Example : 
    ```
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
            databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_PROJECT_ID.appspot.com",
            messagingSenderId: "SENDER_ID",
            appId: "APP_ID"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    ```
3. **Open the website**
   - Open `index.html` in your web browser to view the site, OR
   - Use a local server (e.g., Live Server extension in VSCode) for better experience.

---

## ▶️ Usage
- Navigate through the pages using the links provided.
- On the **Fan Wall** page:
    - Post messages anonymously.
    - Edit or delete your own messages using the provided buttons.
    - Admins can delete any inappropriate messages.
- Enjoy exploring DL.MING's journey and music!

---

## 🤝 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
Feel free to open issues for any bugs or feature requests.

---

## 📜 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

✨ Made with ❤️ by fans of DL.MING
