import React from "react";
import AllProducts from "./Components/AllProducts";
import AllStudents from "./Components/AllStudents";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}

      <AllStudents name="Smith" age={20} gender="male" />
    </div>
  );
};

export default App;
