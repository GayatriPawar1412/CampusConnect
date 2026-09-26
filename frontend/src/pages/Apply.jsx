import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

function Apply() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    phone: "",
    resume: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

    const phone = formData.phone;
  const resume = formData.resume;

  try {
    const response = await fetch("https://campusconnect-backend-67m9.onrender.com/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id || user._id,
        internshipTitle: "Web Development Intern",
        company: "TCS",
        name: user.name,
        email: user.email,
        phone: phone,
        resume: resume,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Application submitted successfully! 🎉");

    navigate("/applications");
  } catch (error) {
    console.error("Application error:", error);
    alert("Server connection failed");
  }
};

  return (
    <div className="apply-page">
      <div className="apply-box">
        <h1>Apply for Internship</h1>

        <p>Submit your application for the internship.</p>

        <form onSubmit={handleSubmit}>
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Resume</label>

          <input
            type="text"
            name="resume"
            placeholder="Enter resume link"
            value={formData.resume}
            onChange={handleChange}
          />

          <button
          type="submit"
          >
          Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;