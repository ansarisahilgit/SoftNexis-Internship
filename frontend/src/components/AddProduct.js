import "../styles/AddProduct.css";
import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("inStock", inStock);
    formData.append("image", image);

    axios
      .post("http://localhost:3000/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);

        alert("Product Added Successfully");

        setName("");
        setPrice("");
        setImage(null);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form-container">
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
        <br />
        <br />

        <label>Product Image:</label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <br />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
