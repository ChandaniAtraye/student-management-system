import axiosInstance from "./axiosInstance";

export const addStudent = (data) =>{
    return axiosInstance.post("/students",data);
};
export const getStudents = () =>{
    return axiosInstance.get("/students");
};
export const updateStudent = (id,data) =>{
    return axiosInstance.put(`/students/${id}`,data);
};
export const deleteStudent = (id) =>{
    return axiosInstance.delete(`/students/${id}`);
};