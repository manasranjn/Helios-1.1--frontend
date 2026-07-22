import react from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import ClassBase from "./Components/ClassBase";
import Functional from "./Components/Functional";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Navbar></Navbar>
      <HeroSection />
      <h1>Vite App</h1>
      <h1>Vite App</h1>

      <Footer /> */}

      <ClassBase />
      <Functional />
    </div>
  );
};

export default App;
