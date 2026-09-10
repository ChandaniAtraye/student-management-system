import axiosInstance from "./axiosInstance";

export const addCourse = (data)=>
    axiosInstance.post("/courses",data);

export const getCourses = ()=>
    axiosInstance.get("/courses");

// export const updateCourse = (id,data)=>
//     axiosInstance.post(`courses/${id}`,data);

// export const deleteCourse = (id)=>
//     axiosInstance.post(`courses/${id}`);