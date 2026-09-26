import { useLocation, useNavigate } from "react-router-dom";
import "./InternshipDetails.css";

function InternshipDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const internship = location.state?.internship;

  if (!internship) {
    return (
      <div className="details-page">
        <h2>Internship not found</h2>
        <button onClick={() => navigate("/internships")}>
          Back to Internships
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-box">

        <div className="company-logo">
          {internship.company.charAt(0)}
        </div>

        <h1>{internship.title}</h1>

        <h2>{internship.company}</h2>

        <p>📍 {internship.location}</p>

        <p>
          💰 <strong>{internship.stipend}</strong>
        </p>

        <h3>Required Skills</h3>

        <div className="skills">
          {internship.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <p>
          This internship provides an opportunity to gain practical
          experience and develop industry-ready skills.
        </p>

        <button onClick={() => navigate("/apply")}>
          Apply Now
        </button>

        <button
          className="back-button"
          onClick={() => navigate("/internships")}
        >
          Back to Internships
        </button>

      </div>
    </div>
  );
}

export default InternshipDetails;