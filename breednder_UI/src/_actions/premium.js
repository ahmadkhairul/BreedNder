import { GET_PREMIUM, UPDATE_PREMIUM } from "../config/constants";
import { API, setToken } from "../config/api";

export const getPremium = () => {
  return {
    type: GET_PREMIUM,
    payload: async () => {
      setToken();
      const res = await API.get("/payment");
      const { data } = res.data;
      return data;
    }
  };
};

export const updatePremium = status => {
  const { idVal, statusVal } = status;
  return {
    type: UPDATE_PREMIUM,
    payload: async () => {
      setToken();
      await API.put("/payment" + idVal, {
        status: statusVal
      });
      const res = await API.get("/payment");
      const { data } = res.data;
      return data;
    }
  };
};
