import axios from "axios";

const API = axios.create({
    baseURL: "https://fitness-tracker-backend-fpdk.onrender.com/api/",
  });
  

export const UserSignUp = async (data) => API.post("https://fitness-tracker-backend-fpdk.onrender.com/user/signup", data);
export const UserSignIn = async (data) => API.post("https://fitness-tracker-backend-fpdk.onrender.com/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("https://fitness-tracker-backend-fpdk.onrender.com/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`https://fitness-tracker-backend-fpdk.onrender.com/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`https://fitness-tracker-backend-fpdk.onrender.com/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });