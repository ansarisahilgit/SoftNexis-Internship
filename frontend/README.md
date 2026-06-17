# Product Management System - Task 2

## Overview

Task 2 focuses on developing the frontend of the Product Management System using React.js and integrating it with the backend APIs developed in Task 1.

The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on products stored in MongoDB Atlas through an Express.js backend.

---

## Features

- View all products
- Add new products
- Update existing products
- Delete products
- Manage product stock status (In Stock / Out of Stock)
- React Router navigation
- Axios API integration
- Basic responsive user interface

---

## Technologies Used

### Frontend

- React.js
- JavaScript (ES6)
- Axios
- React Router DOM
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Version Control

- Git
- GitHub

---

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
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
└── package-lock.json
```

---

## Functionalities Implemented

### Create Product

Users can add a new product by providing:

- Product Name
- Product Price
- Stock Status

---

### Read Products

Displays all products stored in MongoDB.

Information shown:

- Product Name
- Product Price
- Stock Status

---

### Update Product

Users can modify:

- Product Name
- Product Price
- Stock Status

---

### Delete Product

Products can be removed from the database using the Delete button.

---

## Routing

Implemented using React Router DOM.

| Route        | Description          |
| ------------ | -------------------- |
| /            | Home Page            |
| /products    | Product Listing Page |
| /add-product | Add Product Page     |

---

## API Endpoints Used

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /products     |
| POST   | /products     |
| PUT    | /products/:id |
| DELETE | /products/:id |

---

## How to Run the Project

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:3000
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3001
```

---

## Learning Outcomes

Through this task, the following concepts were learned and implemented:

- React Components
- useState Hook
- useEffect Hook
- Axios API Calls
- CRUD Operations
- React Router
- Frontend-Backend Integration
- MongoDB Data Handling
- Git & GitHub Workflow

---

## Outcome

Successfully developed a React frontend integrated with Express.js and MongoDB Atlas. The application supports complete CRUD functionality, stock management, and page navigation using React Router....
