import react from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
      }}
    >
      <h1>Navbar</h1>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Career</li>
      </ul>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
