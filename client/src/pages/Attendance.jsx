import { useEffect, useState } from "react";
import { addAttendance, getAttendance, deleteAttendance } from "../api/attendanceApi";
import { getStudents } from "../api/studentApi";
import { getCourses } from "../api/courseApi";
import Layout from "../components/Layout";

const Attendance = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [attendance, setAttendance] = useState([]);

    const [student, setStudent] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Present");

    useEffect(() => {
        loadStudents();
        loadCourses();
        loadAttendance();
    }, []);

    const loadStudents = async () => {
        try {
            const res = await getStudents();
            setStudents(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadCourses = async () => {
        try {
            const res = await getCourses();
            setCourses(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadAttendance = async () => {
        try {
            const res = await getAttendance();
            setAttendance(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!student || !course || !date || !status) {
            alert("All fields are required");
            return;
        }

        try {
            await addAttendance({
                student,
                course,
                date,
                status
            });

            alert("Attendance marked successfully");

            setStudent("");
            setCourse("");
            setDate("");
            setStatus("Present");

            loadAttendance();

        } catch (error) {
            console.error(error);
            alert("Failed to mark attendance");
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteAttendance(id);

            alert("Attendance deleted successfully");

            loadAttendance();

        } catch (error) {
            console.error(error);
            alert("Failed to delete attendance");
        }
    };

    return (
        <Layout>
            <div className="container h-100 d-flex flex-column">

                <h2>Attendance</h2>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                    {/* Student */}
                    <div className="col-md-6 mb-3">
                        <label>Student</label>

                        <select
                            className="form-control"
                            value={student}
                            onChange={(e) => setStudent(e.target.value)}
                        >
                            <option value="">Select Student</option>

                            {students.map((s) => (
                                <option key={s._id} value={s._id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>


                    {/* Course */}
                    <div className="col-md-6 mb-3">
                        <label>Course</label>

                        <select
                            className="form-control"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        >
                            <option value="">Select Course</option>

                            {courses.map((c) => (
                                <option key={c._id} value={c._id}>
                                    {c.courseName}
                                </option>
                            ))}
                        </select>
                    </div>


                    {/* Date */}
                    <div className="col-md-6 mb-3">
                        <label>Date</label>

                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>


                    {/* Status */}
                    <div className="col-md-6 mb-3">
                        <label>Status</label>

                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                        </select>
                    </div>
</div>

                    <button type="submit" className="btn btn-primary">
                        Mark Attendance
                    </button>

                </form>


                <hr />


                <h3>Attendance Records</h3>

                <div className="flex-grow-1 overflow-auto">
                    <table className="table table-bordered ">

                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {attendance.map((a) => (
                            <tr key={a._id}>

                                <td>{a.student?.name}</td>

                                <td>{a.course?.courseName}</td>

                                <td>
                                    {new Date(a.date).toLocaleDateString()}
                                </td>

                                <td>{a.status}</td>

                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(a._id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>
                </div>

            </div>
        </Layout>
    );
};

export default Attendance;