import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/mainRoutes";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./Store/Actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);
  return (
    <div className='w-screen h-screen overflow-x-hidden bg-dark text-white '>
      <Navbar />
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
