import React, { useState } from "react";
import axios from "axios";
const Products = () => {
  const [data, setData] = useState([]);

  const productData = () => {
    axios.get(`http://localhost:8080/products`).then((res) => {
      console.log("res", res.data);
      setData(res.data);
    });
  };

  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  return (
    <div>
      {data.map((e) => {
        return( 
        <div key={e.id}>
          <img src={e.imageSrc} alt="" />
          <h1>{e.title}</h1>
          <p>{e.category}</p>
          <p>{e.price}</p>
          <p>{e.gender}</p>
        </div>
        );
      })}
      <button onClick={productData}>Add</button>
    </div>
    // <Flex>
    //   {/*  AddProduct */}

    //   <Grid>{/* List of Products */}</Grid>
    //   {/* Pagination */}
    // </Flex>
  );
};

export default Products;
