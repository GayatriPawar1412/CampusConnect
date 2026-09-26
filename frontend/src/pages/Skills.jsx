import { useState } from "react";
import "./Skills.css";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addSkill = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div className="skills-page">
      <div className="skills-card">

        <h1>My Skills</h1>
        <p className="skills-subtitle">
          Add and manage your technical skills
        </p>

        <div className="skill-input">
          <input
            type="text"
            placeholder="Enter a skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

          <button onClick={addSkill}>
            Add Skill
          </button>
        </div>

        <div className="skills-list">
          {skills.map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>

        <button className="profile-btn" onClick={() => navigate("/profile")} >
        Go to My Profile
        </button>

      </div>
    </div>
  );
}

export default Skills;