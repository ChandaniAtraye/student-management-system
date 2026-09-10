import { useState ,useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { addStudent, deleteStudent, getStudents, updateStudent } from "../api/studentApi";
import Layout from "../components/Layout";



const Students = () => {
    const [studentss, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadStudents();
        loadCourses();
    }, []);

 const loadStudents = async () => {
  try {
    const res = await getStudents();

    const studentsArray =
      res?.data?.students ||   // case 1
      res?.data?.data ||       // case 2
      res?.data ||             // case 3
      [];

    setStudents(Array.isArray(studentsArray) ? studentsArray : []);
  } catch (error) {
    console.error(error);
    setStudents([]); // fallback
  }
};

    const loadCourses = async () => {
        const res = await getCourses();
        setCourses(res.data);
    };

    const handleSubmit = async() => {
        if(!name || !email || !phone || !course){
            alert("All fields are required")
        }
          const studentData = {
        name,
        email,
        phone,
        course
    };
    if(editId){
        await updateStudent(editId,studentData);
    }else{
        await addStudent(studentData);
    }
    resetForm();
    loadStudents();

    };

    const handleEdit = (student) => {
        setEditId(student._id);
        setName(student.name);
        setEmail(student.email);
          setPhone(student.phone);
            setCourse(student.course?._id || "");

    };
    const handleDelete = async (id) =>{
        if(window.confirm("Are you sure want to delete this student")){
            await deleteStudent(id);
            loadStudents();
        }
    };
    const resetForm =() =>{
          setEditId(null);
        setName("");
        setEmail("");
          setPhone("");
            setCourse("");
    }
  
    return (
        <div className="container">
            <Layout>
                <h3 className="mb-3">Students</h3>
                <div className="card p-3 mb-4">
                    <h5 className="mb-3">{editId ? "Edit Student" : "Add Student"}</h5>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input
                                className="form-control"
                                placeholder="Student Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-2">
                            <input
                                className="form-control"
                                placeholder="Student email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-2">
                            <input
                                className="form-control"
                                placeholder="Student Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <select className="form-control"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}>

                                <option value="">---Select Course--</option>
                                {courses.map((c) => (
                                    <option key={c._id} value={c._id}>{c.courseName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success me-2" onClick={handleSubmit}>
                        {editId ? "Update" : "Add"}
                    </button>

                    {editId && (
                        <button className="btn btn-secondary" onClick={resetForm}>Cancel/Reset</button>
                    )}
                </div>


                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
  {studentss.length === 0 ? (
    <tr>
      <td colSpan="5" className="text-center">No Student Found</td>
    </tr>
  ) : (
    studentss.map((s) => (
      <tr key={s._id}>
        <td>{s.name}</td>
        <td>{s.email}</td>
        <td>{s.phone}</td>
        <td>{s.course?.courseName || "-"}</td>
        <td>
          <button
            className="btn btn-warning me-2"
            onClick={() => handleEdit(s)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(s._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

                </table>
            </Layout>
        </div>
    );
};

export default Students;