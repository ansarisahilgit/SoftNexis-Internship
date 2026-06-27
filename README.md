# 🚀 SoftNexis Internship – MERN Stack Product Management System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** Product Management System developed during my **SoftNexis MERN Stack Internship**. This project demonstrates backend development, frontend integration, authentication, state management, cloud image uploads, and advanced optimization techniques following industry-standard development practices.

---

## 📖 Project Overview

This project was developed as part of the **SoftNexis MERN Stack Internship** and showcases the complete development lifecycle of a full-stack web application.

The application allows users to securely manage products through a responsive React frontend and an Express.js backend. It includes authentication, CRUD operations, pagination, search, cloud image uploads, and Redux Toolkit state management.

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Password Encryption using bcryptjs
* Protected Backend Routes
* Protected Frontend Routes
* Logout Functionality

---

## 📦 Product Management

* Add Product
* View Products
* Update Product
* Delete Product
* Product Images
* Product Availability Status

---

## 🔍 Search & Pagination

* Server-side Pagination
* Product Search
* Partial Search using Regular Expressions
* Optimized Database Queries

---

## ☁️ Image Upload

* Image Upload using Multer
* Cloudinary Cloud Storage
* Image URL Storage in MongoDB
* Product Image Preview

---

## ⚛️ Redux Toolkit

* Redux Store
* Product Slice
* createAsyncThunk
* Global State Management
* Loading & Error Handling

---

## 📡 REST API

* RESTful CRUD APIs
* Request Validation
* Express Middleware
* MongoDB Integration

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* React Redux
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Cloud Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

### Development Tools

* Git
* GitHub
* Postman
* Visual Studio Code

---

# 📂 Project Structure

```text
SoftNexis-Internship/
│
├── backend/
│   ├── config/
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── package.json
│
├── reports/
├── diary/
└── README.md
```

---

# 📋 Internship Tasks

## ✅ Task 1 – CRUD REST API

Developed a RESTful Product Management API using Express.js and MongoDB.

### Implemented

* Create Product
* Read Products
* Update Product
* Delete Product
* MongoDB Atlas Integration
* Express Validator
* API Testing using Postman

---

## ✅ Task 2 – React Frontend

Developed a React frontend to consume backend REST APIs.

### Implemented

* Home Page
* Product Listing
* Add Product
* Update Product
* Delete Product
* Axios API Integration
* React Router Navigation

---

## ✅ Task 3 – Authentication

Implemented secure authentication using JWT.

### Implemented

* User Registration
* User Login
* Password Hashing
* JWT Token Generation
* Authentication Middleware
* Protected Routes
* Logout

---

## ✅ Task 4 – Advanced Features

Enhanced the application with advanced MERN features.

### Implemented

* Server-side Pagination
* Product Search
* Partial Search using Regex
* Cloudinary Image Upload
* Multer Integration
* Redux Toolkit
* createAsyncThunk
* Global State Management
* Optimized Product API

---

# 🚀 Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/ansarisahilgit/SoftNexis-Internship.git

cd SoftNexis-Internship
```

---

## 2️⃣ Backend Setup

```bash
cd backend

npm install
```

### Create `.env`

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Run backend

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

Open a new terminal

```bash
cd frontend

npm install

npm start
```

React application will start on

```
http://localhost:3001
```

Backend runs on

```
http://localhost:3000
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register User |
| POST   | /login    | Login User    |

---

## Products

| Method | Endpoint                 | Description      |
| ------ | ------------------------ | ---------------- |
| GET    | /products                | Get All Products |
| GET    | /products?page=1&limit=6 | Pagination       |
| GET    | /products?search=laptop  | Search Products  |
| POST   | /products                | Add Product      |
| PUT    | /products/:id            | Update Product   |
| DELETE | /products/:id            | Delete Product   |

---

# 📌 Major Functionalities

* JWT Authentication
* Password Encryption
* Product CRUD
* Product Search
* Product Pagination
* Cloud Image Upload
* Redux Toolkit
* Global State Management
* MongoDB Atlas
* Protected Routes
* Express Validator
* REST APIs
* Responsive Navigation

---

# 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Register Page
* Product Dashboard
* Add Product
* Edit Product
* Delete Product
* Pagination
* Search
* Image Upload
* Cloudinary Dashboard
* MongoDB Atlas
* Postman API Testing

---

# 🎯 Learning Outcomes

This internship helped me gain practical experience in:

* MERN Stack Development
* REST API Development
* MongoDB Database Design
* JWT Authentication
* React Router
* Redux Toolkit
* Async State Management
* Cloudinary Integration
* Multer File Upload
* Server-side Pagination
* Product Search
* Git & GitHub Workflow
* Professional Project Structure

---

# 📈 Project Status

| Module             | Status      |
| ------------------ | ----------- |
| Backend API        | ✅ Completed |
| React Frontend     | ✅ Completed |
| JWT Authentication | ✅ Completed |
| CRUD Operations    | ✅ Completed |
| Product Search     | ✅ Completed |
| Pagination         | ✅ Completed |
| Cloudinary Upload  | ✅ Completed |
| Redux Toolkit      | ✅ Completed |
| Internship Tasks   | ✅ Completed |

---

# 👨‍💻 Author

**Md Sahil Ansari**

🎓 B.Tech – Computer Science & Engineering

💼 MERN Stack Intern – SoftNexis

🔗 GitHub: https://github.com/ansarisahilgit

---

## ⭐ If you found this project useful, consider giving it a Star.
