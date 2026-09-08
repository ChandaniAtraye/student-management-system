import axiosInstance from "./axiosInstance";

// REGISTER USER
export const registerUser = (data) => {
  return axiosInstance.post("/auth/register", data);
};

// LOGIN USER
export const loginUser = (data) => {
  return axiosInstance.post("/auth/login", data);
};