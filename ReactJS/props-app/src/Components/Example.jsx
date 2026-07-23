import React from "react";

const Example = (prop) => {
  //   console.log(a);

  let [a, b, c, d, e] = prop.hobbies;
  console.log(a, b, c, d, e);

  let arr = [1, 2, 3, 4, 5];
  let [p, q, r, s, t] = arr;
  //   console.log(arr[0], arr[1], arr[2]);
  console.log(p, q, r, s, t);

  return (
    <div>
      <h1>Example</h1>
      {/* <p>{a.hobbies[3]}</p> */}
    </div>
  );
};

export default Example;
