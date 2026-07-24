import React from "react";

const Details = ({ name, age, gender }) => {
  //   console.log(props);
  return (
    <div>
      <h1>Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default Details;
