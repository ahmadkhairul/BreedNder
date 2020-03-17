import { GET_PREMIUM, UPDATE_PREMIUM } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PREMIUM}_PENDING`:
    case `${UPDATE_PREMIUM}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PREMIUM}_FULFILLED`:
    case `${UPDATE_PREMIUM}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_PREMIUM}_REJECTED`:
    case `${UPDATE_PREMIUM}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
