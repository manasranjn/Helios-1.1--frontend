import React from "react";

const Product = (prop) => {
  // console.log(prop);

  let x = 10;

  return (
    <div>
      <h1>{prop.pName}</h1>
      <h3>Price: {prop.price}</h3>
      <h4>Rating: 4.5</h4>
      <p>
        Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Veniam necessitatibus optio non accusantium deserunt ratione porro quod
        tempora eius beatae ullam vero dolorum natus, architecto, odit tempore.
        Repellendus, doloremque perferendis.
      </p>
    </div>
  );
};

export default Product;
