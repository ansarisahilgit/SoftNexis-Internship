import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProductPage from "./pages/AddProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        {" | "}

        <Link to="/register">Register</Link>

        {" | "}

        <Link to="/login">Login</Link>
        {" | "}
        <Link to="/products">Products</Link>

        {" | "}
        <Link to="/add-product">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProductPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
