import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fatchProducts = () => {
      fetch("http://localhost:8080/products")
        .then((p) => p.json())
        .then((d) => setProducts(d));
    };
    fatchProducts();
  }, []);

  return (
    <div>
      Products : {" "}
      <div>
      {products.map((e) => (
        <div key={e.id}>
          <Link to={`/products/${e.id}`}>{e.name}</Link>
        </div>
      ))}
      </div>
    
    </div>
  );
};

export default Products;
