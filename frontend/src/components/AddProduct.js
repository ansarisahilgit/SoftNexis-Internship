import "../styles/AddProduct.css";
import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/products", {
        name,
        price,
        inStock,
      })
      .then((response) => {
        console.log(response.data);

        alert("Product Added Successfully");

        setName("");
        setPrice("");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />
        <label>In Stock:</label>

        <select
          value={inStock}
          onChange={(e) => setInStock(e.target.value === "true")}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
