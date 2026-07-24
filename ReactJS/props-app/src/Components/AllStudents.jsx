import React from "react";
import Students from "./Students";

const AllStudents = ({ name, age, gender }) => {
  return (
    <div>
      <Students name={name} age={age} gender={gender} />
    </div>
  );
};

export default AllStudents;
