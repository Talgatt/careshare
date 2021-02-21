import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
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
    const { user } = Axios.post("/api/users/register", data);
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
