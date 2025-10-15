import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Produces from "../Pages/Produces";

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/produces' element={<Produces />} />
    </Routes>
  );
}

export default MainRoutes;
