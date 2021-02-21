import {
  PARTNER_DETAILS_FAIL,
  PARTNER_DETAILS_REQUEST,
  PARTNER_DETAILS_SUCCESS,
  PARTNER_LIST_FAIL,
  PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
} from "../constants/partnerConstants";

export const partnerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTNER_DETAILS_REQUEST:
      return { loading: true };
    case PARTNER_DETAILS_SUCCESS:
      return { loading: false, partner: action.payload };
    case PARTNER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const partnerListReducer = (
  state = { loading: true, partners: [] },
  action
) => {
  switch (action.type) {
    case PARTNER_LIST_REQUEST:
      return { loading: true };
    case PARTNER_LIST_SUCCESS:
      return {
        loading: false,
        partners: action.payload.partners,
      };
    case PARTNER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
