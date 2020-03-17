import { GET_SPECIES, SAVE_SPECIES, DELETE_SPECIES } from "../config/constants";
import { API, setToken } from "../config/api";

export const getSpecies = () => {
  return {
    type: GET_SPECIES,
    payload: async () => {
      const res = await API.get("/species");
      const { data } = res.data;
      return data;
    }
  };
};

export const saveSpecies = name => {
  return {
    type: SAVE_SPECIES,
    payload: async () => {
      setToken();
      await API.post("/species", { name });
      const res = await API.get("/species");
      const { data } = res.data;
      return data;
    }
  };
};

export const deleteSpecies = id => {
  return {
    type: DELETE_SPECIES,
    payload: async () => {
      setToken();
      await API.delete("/species/" + id);
      const res = await API.get("/species");
      const { data } = res.data;
      return data;
    }
  };
};
