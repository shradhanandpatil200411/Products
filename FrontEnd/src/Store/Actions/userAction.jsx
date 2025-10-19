import { toast } from "react-toastify";
import axios from "../../Api/axios";
import { loadUser, removeUser } from "../Reducer/userSlice";

export const asyncCurrentUser = () => (dispatch) => {
  try {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser) {
      dispatch(loadUser(getUser));
    }
  } catch (err) {
    console.log(err);
  }
};

export const asyncRegisterUser = (user) => async () => {
  try {
    if (user) {
      await axios.post("/user", user);
      toast.success("Account created please sign in");
    } else {
      toast.error("Something wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/user?email=${user.email}&password=${user.password}`
    );

    if (data[0]) {
      toast.success("Login Successfully");
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(asyncCurrentUser());
    }
  } catch (err) {
    console.log(err);
  }
};

export const asyncLogOut = () => (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser);
  } catch (err) {
    console.log(err);
  }
};
