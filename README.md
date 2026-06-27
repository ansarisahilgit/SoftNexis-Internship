# Task 2 – React Frontend CRUD Application

## 📌 Overview

Task 2 focuses on developing the frontend of the Product Management System using **React.js**. The application communicates with the backend REST API developed in Task 1 using **Axios** and provides a complete CRUD (Create, Read, Update, Delete) interface for managing products stored in MongoDB.

The project demonstrates React fundamentals including functional components, hooks, routing, API integration, state management, and basic responsive styling.

---

## 🚀 Features

* View all products
* Add a new product
* Update existing product details
* Delete products
* Manage product availability (In Stock: True/False)
* React Router navigation
* Axios integration with Express backend
* Basic responsive user interface
* MongoDB Atlas database integration

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend (Task 1)

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## 📁 Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AddProduct.js
│   │   └── ProductList.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   └── AddProductPage.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── ProductList.css
│   │   └── AddProduct.css
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

# ⚙️ Prerequisites

Install the following software before running the project:

* Node.js
* npm
* Git
* MongoDB Atlas Account
* Backend API from Task 1

---

# 📥 Installation

### 1. Clone Repository

```bash
git clone https://github.com/ansarisahilgit/SoftNexis-Internship.git
```

---

### 2. Navigate to Frontend

```bash
cd SoftNexis-Internship/frontend
```

---

### 3. Install Dependencies

```bash
npm install
```

This installs:

* React
* React Router DOM
* Axios
* React Scripts

---

### 4. Start Backend Server

Open another terminal.

```bash
cd backend
```

Install dependencies if required.

```bash
npm install
```

Create a `.env` file.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Start backend.

```bash
npm start
```

Expected Output

```text
MongoDB Connected
Server running on port 3000
```

---

### 5. Start React Frontend

Open a new terminal.

```bash
cd frontend
```

Run

```bash
npm start
```

The application will open at

```text
http://localhost:3001
```

(if port 3000 is already occupied by the backend).

---

# 🌐 Application Routes

| Route        | Description          |
| ------------ | -------------------- |
| /            | Home Page            |
| /products    | Display Product List |
| /add-product | Add New Product      |

---

# 📋 Product Fields

Each product contains:

| Field   | Type    |
| ------- | ------- |
| name    | String  |
| price   | Number  |
| inStock | Boolean |

Example

```json
{
  "name": "Laptop",
  "price": 55000,
  "inStock": true
}
```

---

# 🔄 CRUD Operations

## Create Product

* Enter product name
* Enter price
* Select stock status
* Click **Add Product**

---

## Read Products

* Fetches all products from the backend
* Displays product name, price and stock status

---

## Update Product

* Click **Edit**
* Modify product details
* Click **Update**

---

## Delete Product

* Click **Delete**
* Product is removed from MongoDB

---

# 📡 API Endpoints Used

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /products     |
| POST   | /products     |
| PUT    | /products/:id |
| DELETE | /products/:id |

---

# 📦 React Concepts Used

* Functional Components
* JSX
* useState Hook
* useEffect Hook
* Event Handling
* Conditional Rendering
* React Router DOM
* Axios API Calls

---

# 🎨 User Interface

The frontend includes:

* Navigation Bar
* Home Page
* Product Listing Page
* Add Product Form
* Edit Product Form
* Basic CSS Styling

---

# ▶️ Running the Project

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

# 📸 Screenshots

Include screenshots of:

* Home Page
* Product List
* Add Product Page
* Update Product
* Delete Product
* MongoDB Atlas Collection

---

# 👨‍💻 Author

**Md Sahil Ansari**

SoftNexis MERN Stack Internship

Task 2 – React Frontend CRUD Application
