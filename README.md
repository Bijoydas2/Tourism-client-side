# 🧳 Toremate Website

A **feature-rich MERN Stack Tourism Platform** where users can explore travel packages, make bookings, and manage their profiles.  
Admins or guides can add, edit, and delete packages with secure authentication and real-time data updates.

---

## 🌍 Live Demo

🔗 [Frontend (Live Site)](https://package-code.web.app)  
🔗 [Backend API](https://package-booking-server.vercel.app)

---

## 🖼️ Screenshots

<div style="display: flex; overflow-x: auto; gap: 10px;">
  <img src="https://i.ibb.co/99wxq2Rs/Screenshot-2025-10-12-072520.png" width="600" alt="Toremate Screenshot 1">
  <img src="https://i.ibb.co/HTcDt36k/Screenshot-2025-10-12-072426.png" width="600" alt="Toremate Screenshot 2">
  <img src="https://i.ibb.co/zh1qTDXp/Screenshot-2025-10-12-072441.png" width="600" alt="Toremate Screenshot 3">
  <img src="https://i.ibb.co.com/R4jH5zhv/Screenshot-1.png" width="600" alt="Toremate Screenshot 3">
</div>

---

## 🚀 Features

- 🔍 Browse tour packages by category, location, or name  
- 🧾 Package details page with reservation & pricing info  
- 🔐 Firebase Authentication (Login/Register/Logout)  
- 🧑‍💼 Role-based access (User | Guide | Admin)  
- 🗂️ Guide Dashboard for managing own packages  
- 💬 SweetAlert2 and Toast notifications  
- 💸 Secure booking and data validation  
- 🧭 Search and Filter system  
- 📱 Fully responsive on all devices  
- 🕵️ Protected routes with Firebase token verification  

---

## 🛠️ Tech Stack

### 💻 Frontend
- React  
- React Router DOM  
- Firebase Authentication  
- Tailwind CSS + DaisyUI  
- Axios, React Hook Form  
- SweetAlert2, React Toastify  

### ⚙️ Backend
- Node.js  
- Express.js  
- MongoDB (via MongoDB Atlas)  
- Firebase Admin SDK (for verifying user tokens)  
- CORS, dotenv, jsonwebtoken  

---

## 📦 Dependencies

```bash
# Frontend
react, react-router-dom, firebase, axios, react-hook-form, sweetalert2, react-toastify

# Backend
express, mongodb, cors, dotenv, jsonwebtoken, firebase-admin


git clone https://github.com/your-username/toremate-client.git
cd toremate-client
npm install

git clone https://github.com/your-username/toremate-server.git
cd toremate-server
npm install
