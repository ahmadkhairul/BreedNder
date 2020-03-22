import { GET_PET } from "../config/constants";
import { API, setToken } from "../config/api";

export const getPet = id => {
  return {
    type: GET_PET,
    payload: async () => {
      setToken();
      const res = await API.get("/matches/" + id + "&True");
      const { data } = res.data;
      return data;
    }
  };
};
