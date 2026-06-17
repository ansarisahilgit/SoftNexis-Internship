import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        {" | "}

        <Link to="/products">Products</Link>

        {" | "}

        <Link to="/add-product">Add Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
