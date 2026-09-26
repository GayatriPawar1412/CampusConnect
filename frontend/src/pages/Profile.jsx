import { useState } from "react";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "Information Technology",
    year: "Third Year",
    skills: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://campusconnect-backend-67m9.onrender.com/api/profile/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Profile saved successfully! 🎉");
  } catch (error) {
    console.error("Profile update error:", error);
    alert("Server connection failed");
  }
};
  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>Build your professional student profile</p>
        </div>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          G
        </div>

        <form onSubmit={handleSave}>

          <div className="form-row">

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>College</label>

              <input
                type="text"
                name="college"
                placeholder="Enter college name"
                value={profile.college}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Branch</label>

              <select
                name="branch"
                value={profile.branch}
                onChange={handleChange}
              >
                <option>Information Technology</option>
                <option>Computer Engineering</option>
                <option>ENTC Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>

            <div className="form-group">
              <label>Year</label>

              <select
                name="year"
                value={profile.year}
                onChange={handleChange}
              >
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Final Year</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Skills</label>

            <input
              type="text"
              name="skills"
              placeholder="Example: HTML, CSS, JavaScript, React, Java"
              value={profile.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>GitHub Profile</label>

              <input
                type="text"
                name="github"
                placeholder="GitHub URL"
                value={profile.github}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>LinkedIn Profile</label>

              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={profile.linkedin}
                onChange={handleChange}
              />
            </div>

          </div>

          <button className="save-profile-btn" type="submit">
            Save Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;