import React from "react";
import Product from "./Product";
import Example from "./Example";
import Example2 from "./Example2";

const AllProducts = () => {
  return (
    <div>
      <h1>All Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores
      </p>

      <div style={{ display: "flex", gap: "10px" }}>
        <Product pName="Laptop" price={50000} rating={4.5} />
        <Product pName="Mobile" price={30000} rating={4} />
        <Product pName="Tablet" price={20000} rating={3.5} />
        <Product pName="Camera" price={65000} rating={4} />
        <Product pName="Watch" price={25000} rating={4.5} />
      </div>

      <Example hobbies={[1, 2, 3, 4, 5]} />

      <Example2 name="John" age={30} />
    </div>
  );
};

export default AllProducts;
