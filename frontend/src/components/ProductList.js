import "../styles/ProductList.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editInStock, setEditInStock] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const fetchProducts = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `http://localhost:3000/products?page=${currentPage}&limit=6&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        console.log(response.data);

        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, search]);

  const deleteProduct = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:3000/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Product Deleted");
        fetchProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProduct = (id) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:3000/products/${id}`,
        {
          name: editName,
          price: editPrice,
          inStock: editInStock,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        console.log(response.data);
        alert("Product Updated Successfully");
        fetchProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {products.map((product) => (
        <div key={product._id} className="product-card">
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
          )}
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
          <button
            onClick={() => {
              setEditingId(product._id);
              setEditName(product.name);
              setEditPrice(product.price);
            }}
          >
            Edit
          </button>
          {editingId === product._id && (
            <div>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />

              <input
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              <select
                value={editInStock}
                onChange={(e) => setEditInStock(e.target.value === "true")}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <button onClick={() => updateProduct(product._id)}>Update</button>
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
