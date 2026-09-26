import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !course) {
      alert("Please fill all fields");
      return;
    }

    try {
  const response = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      course,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.message);
    return;
  }

  alert("Registration successful! 🎉");
  navigate("/login");
} catch (error) {
  console.error("Registration error:", error);
  alert("Server connection failed");
}
  };

  return (
    <div className="register-page">
      <div className="register-box">

        <h1>Create Account</h1>

        <p>Join CampusConnect and start your career journey</p>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Course</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select your course</option>
            <option value="IT">Information Technology</option>
            <option value="Computer">Computer Engineering</option>
            <option value="ENTC">ENTC Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Civil">Civil Engineering</option>
          </select>

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="login-text">
        Already have an account?
        <span onClick={() => navigate("/login")}> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;