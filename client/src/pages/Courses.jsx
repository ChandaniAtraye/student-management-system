import { useEffect, useState } from "react";
import { addCourse, getCourses } from "../api/courseApi";
import Layout from "../components/Layout";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getCourses();
    setCourses(res.data);
  };

  const submit = async () => {
    setError("");
    setSuccess("");

    // 🔴 Validation
    if (!courseName.trim()) {
      setError("Course name is required");
      return;
    }

    try {
      await addCourse({ courseName });

      setSuccess("Course added successfully ✅");
      setCourseName("");
      load(); // refresh list
    } catch (err) {
      setError("Failed to add course");
    }
  };

  return (
    <Layout>
      <h3>Courses</h3>

      {/* 🔴 Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* 🟢 Success Message */}
      {success && <div className="alert alert-success">{success}</div>}

      <input
        className="form-control mb-3"
        placeholder="Enter Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <button className="btn btn-success mb-3" onClick={submit}>
        Add
      </button>

      <ul className="list-group">
        {courses.map((c) => (
          <li key={c._id} className="list-group-item">
            {c.courseName}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Courses;