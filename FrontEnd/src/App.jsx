import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";

function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 text-white '>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
