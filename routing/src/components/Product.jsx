import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
  }, [id]);
  return <div>
    Product ID : {id}
     <div>Product-name : {product.name}</div>
     <div>Price : {product.price}</div>
    </div>;
};

export default Product;
