import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import CreateProducts from "../Pages/CreateProducts";

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/createProduce' element={<CreateProducts />} />
    </Routes>
  );
}

export default MainRoutes;
