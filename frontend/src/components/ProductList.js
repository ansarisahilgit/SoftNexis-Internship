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

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
