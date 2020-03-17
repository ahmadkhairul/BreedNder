import { POST_LOGIN } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${POST_LOGIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${POST_LOGIN}_REJECTED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
