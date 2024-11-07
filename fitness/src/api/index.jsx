import axios from "axios";

const API = axios.create({
    baseURL: "https://fitness-tracker-backend-fpdk.onrender.com/api/",
});

// Helper function to check the response before accessing 'data'
const handleResponse = (response) => {
  if (response && response.data) {
    return response.data; // Return the data if it exists
  } else {
    throw new Error("Response data is undefined or malformed");
  }
};

export const UserSignUp = async (data) => {
  try {
    const response = await API.post("user/signup", data);
    return handleResponse(response); // Check and return response data
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    throw error; // Throw the error for further handling
  }
};

export const UserSignIn = async (data) => {
  try {
    const response = await API.post("user/signin", data);
    return handleResponse(response);
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};

export const getDashboardDetails = async (token) => {
  try {
    const response = await API.get("user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching dashboard details:", error.message);
    throw error;
  }
};

export const getWorkouts = async (token, date) => {
  try {
    const response = await API.get(`user/workout${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching workouts:", error.message);
    throw error;
  }
};

export const addWorkout = async (token, data) => {
  try {
    const response = await API.post("user/workout", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error adding workout:", error.message);
    throw error;
  }
};
