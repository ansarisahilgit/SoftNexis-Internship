# Task 4 – Advanced Features & Optimization

## 📖 Overview

Task 4 focuses on enhancing the MERN Stack Product Management application by implementing advanced backend and frontend features. The objective was to improve application performance, user experience, and state management while following industry-standard development practices.

---

## 🚀 Features Implemented

### 📄 Server-side Pagination

* Implemented pagination using `page` and `limit` query parameters.
* Optimized database queries with MongoDB `skip()` and `limit()`.
* Returned pagination metadata including:

  * Current Page
  * Total Pages
  * Total Products

### 🔍 Product Search

* Added dynamic product search functionality.
* Implemented case-insensitive partial search using MongoDB Regular Expressions (`$regex`).
* Integrated search with pagination for efficient filtering.

### 🖼️ Product Image Upload

* Integrated **Multer** middleware for file uploads.
* Configured **Cloudinary** for cloud-based image storage.
* Stored uploaded image URLs in MongoDB.
* Displayed product images dynamically in the React frontend.

### ⚡ API Optimization

* Improved API responses using pagination.
* Reduced unnecessary database reads by fetching only required records.
* Combined search and pagination into a single optimized endpoint.

### ⚛️ Redux Toolkit Integration

* Configured Redux Toolkit Store.
* Created Product Slice.
* Implemented asynchronous API requests using `createAsyncThunk`.
* Managed global product state using Redux.
* Integrated Redux with React using:

  * `Provider`
  * `useSelector`
  * `useDispatch`

---

# 🛠️ Technologies Used

## Frontend

* React.js
* Redux Toolkit
* React Redux
* Axios
* React Router DOM
* HTML5
* CSS3

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Cloud Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

---

# 📂 Project Structure

```text
backend/
│
├── config/
│   └── cloudinary.js
│
├── controllers/
├── middleware/
│   └── upload.js
├── models/
├── routes/
└── server.js

frontend/
│
├── src/
│   ├── components/
│   ├── redux/
│   │   ├── store.js
│   │   └── productsSlice.js
│   ├── pages/
│   └── styles/
```

---

# ✨ Implemented Functionalities

* Server-side Pagination
* Product Search
* Partial Search using Regex
* Product Image Upload
* Cloudinary Integration
* Multer Middleware
* Dynamic Image Rendering
* Redux Store Configuration
* Global State Management
* Async API Calls using createAsyncThunk
* Optimized Product Listing

---

# ⚙️ API Endpoints

## Get All Products

```http
GET /products
```

Supports:

```http
GET /products?page=1&limit=6
```

Search:

```http
GET /products?search=laptop
```

Combined:

```http
GET /products?page=1&limit=6&search=laptop
```

---

## Create Product

```http
POST /products
```

Content Type:

```text
multipart/form-data
```

Fields:

* name
* price
* inStock
* image

---

## Update Product

```http
PUT /products/:id
```

---

## Delete Product

```http
DELETE /products/:id
```

---

# 📌 Learning Outcomes

Through this task, I gained practical experience in:

* Server-side Pagination
* MongoDB Query Optimization
* Regular Expression Search
* File Upload Handling using Multer
* Cloud-based Image Storage using Cloudinary
* Redux Toolkit State Management
* createAsyncThunk
* React Global State Management
* Optimized MERN Application Development

---

# 📷 Suggested Screenshots

Include screenshots of:

* Product List
* Pagination
* Product Search
* Add Product Form
* Image Upload
* Cloudinary Dashboard
* Redux Product Management
* MongoDB Atlas Collection

---

# 🎯 Outcome

Task 4 transformed the basic CRUD application into a more scalable and production-oriented MERN application by incorporating modern features such as server-side pagination, efficient searching, cloud image storage, and centralized state management using Redux Toolkit.
