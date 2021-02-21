import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";
import Axios from "axios";
import axios from "axios";

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });

  const { data } = await axios.get("/api/users");

  dispatch({
    type: USER_LIST_SUCCESS,
    payload: data,
  });
  try {
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error,
    });
  }
};

export const registerUser = (data) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  try {
    console.log(data);
    const { user } = await Axios.post("/api/users/register", data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error,
    });
  }
};

export const signin = (email, password) => async(dispatch) =>{

  console.log("mail", email);
  console.log("lalala");
  dispatch({
    type: USER_SIGNIN_REQUEST,
    
  });

  try {
    console.log("here");
    console.log("password",password);
    const data = await Axios.post("/api/users/signin", {email: "bka@google.com", password:"123"});
  // console.log("data insight",data.data);
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
   
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error,
    });
  }
}