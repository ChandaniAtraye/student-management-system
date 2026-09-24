
import {Link} from "react-router-dom";
import Layout from "./Layout";
const Sidebar = () =>{
 return (

    <div className="bg-dark text-white p-3" style={{width:"220px",height:"100vh"}}>
        <h4>Admin Panel</h4>
        <hr/>
        <Link className="text-white d-block mb-2" to="/">Dashboard</Link>
        <Link className="text-white d-block mb-2" to="/students">Students</Link>
        <Link className="text-white d-block mb-2" to="/courses">Courses</Link>
        <Link className="text-white d-block mb-2" to="/attendance">Attendance</Link>
       
        {/* <Layout/> */}
    </div>
);
};
export default Sidebar;
    