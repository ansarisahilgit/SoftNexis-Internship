import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((response) => {
        console.log(response.data);

        alert("Product Deleted");

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
