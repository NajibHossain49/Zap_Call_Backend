# 🔗 ZapCall – Fullstack Chat & Video Calling App

ZapCall is a modern fullstack communication platform that offers **real-time chat** and **video calling** functionality using the powerful APIs provided by **Stream.io**. Built using the MERN stack, this project is an end-to-end application demonstrating secure user authentication, responsive UI, live data handling, and media streaming.

---

## 📌 Overview

In today’s digital age, communication apps have become the cornerstone of remote collaboration, community building, and online engagement. ZapCall aims to bring a **smooth, real-time experience** for both messaging and face-to-face communication using cutting-edge technologies like **React 19**, **Node.js**, and **Stream Chat & Video SDKs**.

---

## 🔗 Live Demo

### 🌐 Try it out here: [https://zapcall.onrender.com](https://zapcall.onrender.com)

🧪 **Note:**  
- Please allow **camera and microphone access** for video calling features to work properly.  
- Since the app is hosted on **Render's free tier**, it may take **10–30 seconds** to wake up if inactive. Thanks for your patience!

---

## 🎯 Objective

The goal of ZapCall is to:
- 📞 Demonstrate full-duplex, real-time communication (chat + video).
- 🔐 Implement secure login with **JWT** token management.
- 📱 Provide a seamless, responsive, and user-friendly UI.
- 🛠️ Use a scalable and modern tech stack with clean state management.
- 💬 Integrate third-party APIs **(Stream.io)** to handle complex infrastructure like video/audio streaming and chat services.

---

## 🚀 Tech Stack

### 📦 Frontend
- **React 19**
- **Vite**
- **Tailwind CSS + DaisyUI**
- **Stream Video SDK**
- **Stream Chat SDK**
- **React Router v7**
- **Zustand (State Management)**
- **React Query (Data Fetching & Caching)**

### 🖥 Backend
- **Node.js + Express**
- **MongoDB (Mongoose)**
- **JWT Authentication**
- **Stream Chat/Video API Integration**

---

## 📸 Features

- ✅ User Sign In / Sign Up with JWT
- 💬 Real-Time Chat (powered by Stream Chat)
- 🎥 Video Calling (powered by Stream Video)
- 👥 Presence/Typing indicators (via Stream)
- 🌐 Responsive UI with Tailwind CSS & DaisyUI
- ☁️ Global state with Zustand
- ⚡ Query + Mutation handling with React Query
- 🔒 Secure environment config using `.env` files

---

## 📁 Folder Structure

```

ZapCall/
│
├── client/              # Frontend React App (Vite)
│   ├── src/
│   ├── .env.local
│   └── package.json
│
├── server/              # Backend Node/Express API
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── .env.local
│   └── server.js
│
├── README.md
└── ...

````

---

## 🔑 Environment Variables

### 🔹 Frontend (`client/.env.local`)
```env
# Stream API Key
VITE_STREAM_API_KEY= your_Stream_API_Key
````

### 🔹 Backend (`server/.env.local`)

```env
PORT=3000

# MongoDB connection string
MONGO_URI= your_MongoDB_connection_string

# Stream API credentials
STEAM_API_KEY= your_Stream_API_Key
STEAM_API_SECRET= your_STEAM_API_SECRET

# JWT Secret Key
JWT_SECRET_KEY= your_jwt_secret_key

# Environment mode
NODE_ENV=production
```

> ⚠️ **Important:** Never share your `.env.local` files or hardcode secrets in production. Use Gitignore to protect them.

---

## 🧪 Getting Started

### 📌 Prerequisites

* Node.js 18+
* MongoDB Atlas account
* Stream.io account (Chat & Video keys)

---

### 🛠️ Installation Steps

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/NajibHossain49/Zap_Call_Frontend.git
cd Zap_Call_Frontend
```

#### 2️⃣ Setup the Frontend

```bash
npm install
touch .env.local (configure_your_file)
npm run dev
```

#### 3️⃣ Setup the Backend

```bash
git clone https://github.com/NajibHossain49/Zap_Call_Backend.git
cd Zap_Call_Backend
npm install
touch .env.local (configure_your_file)
npm run dev
```

---

## 🚧 Challenges Faced

Building ZapCall involved solving several real-world development and integration problems:

### 🔌 Stream API Integration
- **Challenge:** Integrating both **Stream Chat** and **Stream Video** SDKs simultaneously, while maintaining synchronization between the two.
- **Solution:** Carefully coordinated token management and lifecycle hooks to ensure session validity and user authentication.

### 🔐 Authentication with JWT
- **Challenge:** Securely managing user authentication and session persistence across frontend and backend.
- **Solution:** Implemented JWT-based login system with environment-controlled secrets, and synchronized tokens with Stream's user creation and permission setup.

### 📞 Real-Time Communication
- **Challenge:** Ensuring stable video call connections and real-time chat delivery over varied network conditions.
- **Solution:** Utilized Stream's event-based system with fallback handling and UI feedback for disconnected users.

### 🔁 State Management
- **Challenge:** Managing and syncing chat, user info, call state, and routing efficiently without global context overload.
- **Solution:** Used **Zustand** for lightweight state management and **React Query** for async state, minimizing re-renders and boilerplate.

### 🎨 UI Responsiveness
- **Challenge:** Designing a responsive, mobile-friendly UI for both chat and video without conflicting layout behaviors.
- **Solution:** Tailwind CSS and DaisyUI helped build modular, theme-consistent components with mobile-first responsiveness.

### 🌍 Environment Configuration
- **Challenge:** Handling environment-specific configurations securely across local dev and production.
- **Solution:** Used `.env.local` and Vite’s `VITE_` prefixing for secure environment variable management, and ensured secrets were excluded from source control.

---



## 🌐 Deployment Recommendations

| Layer     | Platform         |
| --------- | ---------------- |
| Frontend  | Vercel / Netlify |
| Backend   | Render / Railway |
| Database  | MongoDB Atlas    |
| Media SDK | Stream.io        |

---

## 🧭 Roadmap / Future Features

* [ ] Group Chat
* [ ] Push Notifications
* [ ] User Profiles & Avatars
* [ ] Admin Panel for Moderation


---

## 🙌 Acknowledgements

* [Stream.io](https://getstream.io) – Chat & Video SDK
* [MongoDB Atlas](https://www.mongodb.com/atlas)
* [Tailwind CSS](https://tailwindcss.com)
* [React](https://react.dev)
* [Lucide Icons](https://lucide.dev)

---

## 🧑‍💻 Author

Developed with ❤️ by **Najib Hossain**  
[GitHub](https://github.com/NajibHossain49) | [LinkedIn](https://www.linkedin.com/in/md-najib-hossain) | [Portfolio](https://najib-hossain.web.app)

## 🌟 Show Your Support

If you like this project, please ⭐ the repository and share it with others!


## 🤝 Contributing

Pull requests and stars are always welcome!
If you'd like to suggest improvements or report a bug, feel free to open an issue.


