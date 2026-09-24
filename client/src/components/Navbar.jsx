import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clear token / auth state
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="navbar bg-white navbar-light px-3">
      <h3 className="navbar-brand ">Student Management</h3>

      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;