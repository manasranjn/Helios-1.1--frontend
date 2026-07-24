import React from "react";
import Details from "./Details";

const Students = ({ name, age, gender }) => {
  return (
    <div>
      <Details name={name} age={age} gender={gender} />
    </div>
  );
};

export default Students;
