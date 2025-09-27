import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <div clasName="w-full h-full rtl:space-x-reverse">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
