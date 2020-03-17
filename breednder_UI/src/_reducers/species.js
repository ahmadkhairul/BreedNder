import { GET_SPECIES, SAVE_SPECIES, DELETE_SPECIES } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SPECIES}_PENDING`:
    case `${SAVE_SPECIES}_PENDING`:
    case `${DELETE_SPECIES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_SPECIES}_FULFILLED`:
    case `${SAVE_SPECIES}_FULFILLED`:
    case `${DELETE_SPECIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_SPECIES}_REJECTED`:
    case `${SAVE_SPECIES}_REJECTED`:
    case `${DELETE_SPECIES}_REJECTED`:
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
