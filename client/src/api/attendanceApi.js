import axiosInstance from "./axiosInstance";

export const addAttendance = (data) => {
  return axiosInstance.post("/attendance", data);
};

export const getAttendance = () => {
  return axiosInstance.get("/attendance");
};

export const updateAttendance = (id, data) => {
  return axiosInstance.put(`/attendance/${id}`, data);
};

export const deleteAttendance = (id) => {
  return axiosInstance.delete(`/attendance/${id}`);
};