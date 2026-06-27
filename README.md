# 🚀 Task 1 - CRUD REST API using Express.js & MongoDB

## 📌 Overview

This project is a RESTful CRUD API developed using **Node.js**, **Express.js**, and **MongoDB Atlas** as part of my **SoftNexis MERN Stack Internship**.

The API allows users to perform complete **Create, Read, Update, and Delete (CRUD)** operations on product data. The project follows a modular backend architecture using controllers, models, routes, and middleware for better code organization and maintainability.

---

## 🎯 Objectives

* Build a RESTful API using Express.js
* Connect the application to MongoDB Atlas
* Perform CRUD operations on product data
* Implement request validation
* Test APIs using Postman
* Follow professional backend project structure
* Manage source code using Git and GitHub

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* express-validator
* Nodemon
* Postman
* Git & GitHub

---

## 📂 Project Structure

```text
task-1-crud-api/
│
├── backend/
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── middleware/
│   │   └── validateProduct.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── screenshots/
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── server.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ansarisahilgit/SoftNexis-Internship.git
```

---

## 2️⃣ Navigate to Task 1 Backend

```bash
cd SoftNexis-Internship/task-1-crud-api/backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/productsDB?retryWrites=true&w=majority
```

---

## 5️⃣ Start the Development Server

```bash
npm run dev
```

Expected output:

```text
MongoDB Connected
Server running on port 3000
```

---

# 📡 API Endpoints

## ➕ Create Product

**POST** `/products`

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "inStock": true
}
```

---

## 📄 Get All Products

**GET** `/products`

---

## 🔍 Get Product by ID

**GET** `/products/:id`

---

## ✏️ Update Product

**PUT** `/products/:id`

Request Body:

```json
{
  "name": "Gaming Laptop",
  "price": 75000,
  "inStock": false
}
```

---

## ❌ Delete Product

**DELETE** `/products/:id`

---

# ✅ Features

* RESTful API architecture
* Express.js backend
* MongoDB Atlas integration
* Mongoose schema modeling
* CRUD operations
* Request validation
* Error handling middleware
* Environment variable configuration
* Modular folder structure
* API testing using Postman

---

# 🧪 Testing

All API endpoints were tested successfully using **Postman**.

### Tested Operations

* Create Product
* Get All Products
* Get Product by ID
* Update Product
* Delete Product
* Validation Error Handling

---

# 📸 Screenshots

The project includes screenshots of:

* Folder structure
* Server running successfully
* MongoDB Atlas connection
* POST request
* GET request
* GET by ID request
* PUT request
* DELETE request
* Validation testing
* GitHub repository

---

# 📚 Learning Outcomes

Through this project, I learned:

* Backend development using Express.js
* REST API design principles
* MongoDB Atlas connectivity
* Database modeling with Mongoose
* Middleware implementation
* Request validation
* API testing with Postman
* Git branching workflow
* GitHub SSH authentication
* Professional backend project organization

---

# 👨‍💻 Author

**Md Sahil Ansari**

B.Tech – Computer Science & Engineering
Presidency University

---

# 🏢 Internship

**Organization:** SoftNexis

**Internship Domain:** MERN Stack Development

**Task:** Task 1 – CRUD REST API using Express.js & MongoDB
