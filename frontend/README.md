# Task 3 - JWT Authentication (MERN Stack)

## Overview

This project implements JWT (JSON Web Token) based authentication for the MERN Stack CRUD application developed in previous tasks.

The application allows users to register, log in, and securely access protected product management features using JWT authentication.

---

## Features

### Authentication

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- JWT Verification Middleware
- Protected Backend Routes

### Product Management

- Create Product
- View Products
- Update Product
- Delete Product

All product operations require a valid JWT token.

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Authentication

- JWT (jsonwebtoken)
- bcryptjs

---

## Project Structure

```
backend
│
├── controllers
│   ├── authController.js
│   └── productController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Product.js
│
├── routes
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── .env
├── server.js
└── package.json


frontend
│
├── components
│   ├── AddProduct.js
│   ├── ProductList.js
│   └── ProtectedRoute.js
│
├── pages
│   ├── Home.js
│   ├── Login.js
│   └── Register.js
│
├── App.js
└── package.json
```

---

## Installation

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

### Products

### Get All Products

```
GET /products
```

### Add Product

```
POST /products
```

### Update Product

```
PUT /products/:id
```

### Delete Product

```
DELETE /products/:id
```

> All Product routes require a valid JWT token.

---

## Authentication Flow

1. User registers with email and password.
2. Password is hashed using bcryptjs.
3. User logs in.
4. Server generates a JWT token.
5. Token is stored in browser localStorage.
6. Frontend sends the token in the Authorization header.
7. Backend verifies the token before allowing access to protected routes.

---

## Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Protected API Routes
- Authorization Middleware
- Token Verification

---

## Screenshots

Include screenshots of:

- User Registration
- User Login
- JWT Token Response
- Add Product
- Product List
- Update Product
- Delete Product

---

## Author

**Md Sahil Ansari**

B.Tech Computer Science & Engineering

SoftNexis MERN Stack Internship

Task 3 – JWT Authentication
