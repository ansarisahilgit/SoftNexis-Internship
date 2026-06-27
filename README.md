# Task 3 – JWT Authentication

## 📖 Overview

This project extends the Product Management MERN application by implementing **JWT (JSON Web Token) Authentication**. Users can securely register, log in, and access protected product management features. Passwords are encrypted using **bcryptjs**, and all protected backend routes require a valid JWT token.

---

# ✨ Features

## Authentication

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Token Generation
* JWT Verification Middleware
* Protected Backend Routes
* Protected Frontend Routes
* Logout Functionality

## Product Management

Authenticated users can:

* Create Product
* View Products
* Update Product
* Delete Product

All protected API requests include the JWT token in the Authorization header.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JSON Web Token (jsonwebtoken)
* bcryptjs

---

# 📂 Project Structure

```text
task-3-jwt-auth/

├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── productController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── productRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.js
│   │   │   ├── ProductList.js
│   │   │   └── ProtectedRoute.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

# 🚀 Setup Guide

## 1. Clone the Repository

```bash
git clone <repository-url>

cd SoftNexis-Internship
```

---

# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
```

Example:

```env
PORT=3000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database

JWT_SECRET=mysecretkey123
```

Start the backend server.

```bash
npm run dev
```

The backend server will run at:

```text
http://localhost:3000
```

---

# Frontend Setup

Open a new terminal.

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

The frontend will run at:

```text
http://localhost:3001
```

(or another available port if 3000 is already in use.)

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

Response

```json
{
  "_id": "...",
  "email": "user@example.com",
  "token": "JWT_TOKEN"
}
```

---

## Product APIs

### Get All Products

```http
GET /products
```

---

### Add Product

```http
POST /products
```

---

### Update Product

```http
PUT /products/:id
```

---

### Delete Product

```http
DELETE /products/:id
```

---

# Authentication Flow

```text
Register User
      │
      ▼
Password Hashed
      │
      ▼
User Stored in MongoDB
      │
      ▼
JWT Generated
      │
      ▼
Token Returned
      │
      ▼
Stored in Local Storage
      │
      ▼
Frontend Sends Token
      │
Authorization: Bearer <JWT_TOKEN>
      │
      ▼
Backend Middleware Verifies Token
      │
      ▼
Protected Routes Access Granted
```

---

# Security Features

* Password Hashing with bcryptjs
* JWT Authentication
* Protected Backend Routes
* Protected Frontend Routes
* Authorization Middleware
* Token Verification
* Local Storage Session Management

---

# Testing

The following features were tested successfully:

* User Registration
* User Login
* JWT Generation
* Password Encryption
* Protected Route Access
* Add Product
* View Products
* Update Product
* Delete Product
* Logout
* Unauthorized Access Redirection

---

# Screenshots

Include screenshots of:

* Register Page
* Login Page
* JWT Token Response
* Product Dashboard
* Add Product
* Update Product
* Delete Product
* Protected Route Redirection

---

# Author

**Md Sahil Ansari**

B.Tech – Computer Science & Engineering

SoftNexis MERN Stack Internship

Task 3 – JWT Authentication
