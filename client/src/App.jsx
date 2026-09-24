import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./context/AuthContext";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;