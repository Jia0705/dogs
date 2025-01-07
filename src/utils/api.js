import axios from "axios";

const API_URL = "http://localhost:5555";

/* INSTRUCTION: create a function called getDogs that fetches the dogs from the back-end server */
export async function getDogs() {
    try {
      const response = await axios.get(`${API_URL}/dogs`);
      return response.data;
    } catch (error) {
      console.log("Error :", error);
      return [];
    }
  }
  
/* INSTRUCTION: create a function called getCats that fetches the cats from the back-end server */
export async function getCats() {
    try {
      const response = await axios.get(`${API_URL}/cats`);
      return response.data;
    } catch (error) {
      console.log("Error :", error);
      return [];
    }
  }
/* INSTRUCTION: create a function called getSmallAnimals that fetches the small animals from the back-end server */
export async function getSmallAnimals() {
    try {
      const response = await axios.get(`${API_URL}/small-animals`);
      return response.data;
    } catch (error) {
      console.log("Error :", error);
      return [];
    }
  }