import axios from "axios";

// Create an axios instance with the base URL for the backend API
const API = axios.create({
    baseURL: "https://fitness-tracker-backend-fpdk.onrender.com/api/",  // Base URL
});

// Helper function to check the response before accessing 'data'
const handleResponse = (response) => {
  if (response && response.data) {
    return response.data; // Return the data if it exists
  } else {
    throw new Error("Response data is undefined or malformed");
  }
};

// User sign-up API call
export const UserSignUp = async (data) => {
  try {
    const response = await API.post("user/signup", data); // No need for the full URL here
    return handleResponse(response); // Check and return response data
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    throw error; // Throw the error for further handling
  }
};

// User sign-in API call
export const UserSignIn = async (data) => {
  try {
    const response = await API.post("user/signin", data); // Again, relative URL
    return handleResponse(response);
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};

// Get dashboard details with token authorization
export const getDashboardDetails = async (token) => {
  try {
    const response = await API.get("user/dashboard", {
      headers: { Authorization: `Bearer ${token}` }, // Use Authorization header
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching dashboard details:", error.message);
    throw error;
  }
};

// Get workouts for a specific date with token authorization
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

// Add a new workout entry with token authorization
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
