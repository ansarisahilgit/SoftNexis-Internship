# Task 1 - CRUD API using Express.js and MongoDB

## 📌 Project Overview

This project is a simple RESTful CRUD API built using:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

The API allows users to:

- Create a product
- Read all products
- Read a single product
- Update a product
- Delete a product

This project was developed as part of my MERN Stack Internship at SoftNexis.

---

# 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- express-validator
- Nodemon
- Postman

---

# 📂 Folder Structure

```bash
backend/
│
├── controllers/
│   └── productController.js
│
├── middleware/
│   └── validateProduct.js
│
├── models/
│   └── Product.js
│
├── routes/
│   └── productRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <https://github.com/ansarisahilgit/SoftNexis-Internship>
```

---

## 2️⃣ Navigate to Project

```bash
cd backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create `.env` File

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

---

## 5️⃣ Start Server

```bash
npm run dev
```

---

# 🌐 API Endpoints

## ➕ Create Product

### POST `/products`

```json
{
  "name": "Laptop",
  "price": 50000,
  "inStock": true
}
```

---

## 📥 Get All Products

### GET `/products`

---

## 🔍 Get Single Product

### GET `/products/:id`

---

## ✏️ Update Product

### PUT `/products/:id`

```json
{
  "name": "Gaming Laptop",
  "price": 75000,
  "inStock": false
}
```

---

## ❌ Delete Product

### DELETE `/products/:id`

---

# ✅ Features

- RESTful API architecture
- MongoDB Atlas integration
- CRUD functionality
- Input validation using express-validator
- Error handling middleware
- Modular folder structure
- Environment variable support

---

# 🧪 API Testing

The API was tested using Postman.

Tested Operations:

- Create Product
- Get All Products
- Get Single Product
- Update Product
- Delete Product
- Validation Error Handling

---

# 📸 Screenshots

Screenshots of:

- API testing
- MongoDB Atlas
- Folder structure
- GitHub commits

are included in the project documentation.

---

# 📖 Learning Outcomes

Through this project, I learned:

- Backend development using Express.js
- REST API creation
- MongoDB Atlas connection
- Mongoose schema modeling
- Middleware and validation
- API testing using Postman
- Git and GitHub workflow

---

# 👨‍💻 Author

Md Sahil Ansari

B.Tech CSE Student
Presidency University

---

# 📌 Internship

Developed during MERN Stack Internship at SoftNexis.
