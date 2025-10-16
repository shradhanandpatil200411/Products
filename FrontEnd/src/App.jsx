import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";

function App() {
  return (
    <div className='w-screen h-screen bg-dark text-white '>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
