import React from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Services />
      {/* <div className='Container border-green-500 border-2 max-w-6xl mx-auto h-full'></div> */}
    </div>
  );
}

export default App;
