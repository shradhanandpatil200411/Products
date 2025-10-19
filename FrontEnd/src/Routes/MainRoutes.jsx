import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import CreateProducts from "../Pages/Admin/CreateProducts";
import ProductsDetails from "../Pages/ProductsDetails";

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/admin/create-products' element={<CreateProducts />} />
      <Route path='/admin/product-details/:id' element={<ProductsDetails />} />
    </Routes>
  );
}

export default MainRoutes;
