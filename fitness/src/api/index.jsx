import axios from "axios";

const API = axios.create({
    baseURL: "https://fitness-tracker-backend-fpdk.onrender.com/api/",
});

export const UserSignUp = async (data) => {
    try {
        const response = await API.post("user/signup", data);
        return response.data; // Ensure you return the response data
    } catch (error) {
        console.error("Error during sign-up:", error.message);
        throw error; // Throw the error for further handling if needed
    }
};

export const UserSignIn = async (data) => {
    try {
        const response = await API.post("user/signin", data);
        return response.data;
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
        return response.data;
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
        return response.data;
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
        return response.data;
    } catch (error) {
        console.error("Error adding workout:", error.message);
        throw error;
    }
};
