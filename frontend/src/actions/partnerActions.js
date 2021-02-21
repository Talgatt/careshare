import axios from "axios";
import {
  PARTNER_DETAILS_FAIL,
  PARTNER_DETAILS_REQUEST,
  PARTNER_DETAILS_SUCCESS,
  PARTNER_LIST_FAIL,
  PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
} from "../constants/partnerConstants";

export const listPartners = () => async (dispatch) => {
  dispatch({
    type: PARTNER_LIST_REQUEST,
  });

  const { data } = await axios.get("/api/partners");

  dispatch({
    type: PARTNER_LIST_SUCCESS,
    payload: data,
  });
  try {
  } catch (error) {
    dispatch({
      type: PARTNER_LIST_FAIL,
      payload: error,
    });
  }
};

export const detailsPartner = (partnerId) => async (dispatch) => {
  dispatch({
    type: PARTNER_DETAILS_REQUEST,
  });

  try {
    const { data } = await axios.get(`/api/partners/${partnerId}`);
    console.log("data is");
    console.log(data);
    dispatch({
      type: PARTNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PARTNER_DETAILS_FAIL,
      payload: error,
    });
  }
};
