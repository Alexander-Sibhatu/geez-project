import axios from 'axios';


const URL = "http://127.0.0.1:8000/api/gis/"

export const fetchVberbs = async () => {
  try {
    const response = await axios.get(URL)
    // console.log("API Response:", response);  // Log the full response
    // console.log("API Response Data:", response.data);

    return response.data

  } catch (error) {
    console.error("Error fetching verbs:", error.message);
    return [];
  }
}

