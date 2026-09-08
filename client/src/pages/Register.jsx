import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, role } = form;

    // validation
    if (!name || !email || !password || !role) {
      setError("All fields are required");
      return;
    }

    try {
      await registerUser(form);

      // ✅ redirect after successful register
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="container mt-5 col-md-12">
      <h1>Register</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Enter Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          className="form-select mb-3"
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="">Select Role</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button className="btn btn-success w-100">
          Register
        </button>
         {/* 👇 Register link */}
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  );
};

export default Register;