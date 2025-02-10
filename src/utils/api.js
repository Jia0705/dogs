import axios from "axios";

const API_URL = "http://localhost:5555";

/* INSTRUCTION: create a function called getDogs that fetches the dogs from the back-end server */
export const getDogs = async (size = "") => {
  try {
    const response = await axios.get(API_URL + "/dogs", {
      params: { size }, // Pass size filter
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

/* INSTRUCTION: create a function called getCats that fetches the cats from the back-end server */
export const getCats = async (sort = "", page = 1, limit = 5) => {
  try {
    const response = await axios.get(API_URL + "/cats", {
      params: { sort, page, limit }, // Pass sorting & pagination parameters
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};

/* INSTRUCTION: create a function called getSmallAnimals that fetches the small animals from the back-end server */
export const getSmallAnimals = async (search = "") => {
  try {
    const response = await axios.get(API_URL + "/small-animals", {
      params: { search }, // Pass search query
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data.error);
  }
};
