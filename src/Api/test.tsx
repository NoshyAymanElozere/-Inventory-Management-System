import axios from "axios";

const test = async (username, password) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/login/", {
      username,
      password,
    });

    const token = response.data.token;
    // Store the token in localStorage
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};

export default test;
