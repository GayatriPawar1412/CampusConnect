import { useState } from "react";
import "./Internships.css";
import { useNavigate } from "react-router-dom";

function Internships() {
  
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const internships = [
    {
      id: 1,
      title: "Web Development Intern",
      company: "TCS",
      location: "Pune / Remote",
      skills: ["React", "JavaScript", "HTML"],
      stipend: "₹10,000/month"
    },
    {
      id: 2,
      title: "Software Development Intern",
      company: "Infosys",
      location: "Pune",
      skills: ["Java", "SQL", "Git"],
      stipend: "₹15,000/month"
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "Tech Mahindra",
      location: "Mumbai / Remote",
      skills: ["HTML", "CSS", "JavaScript"],
      stipend: "₹12,000/month"
    },
    {
      id: 4,
      title: "Backend Developer Intern",
      company: "Wipro",
      location: "Bangalore",
      skills: ["Node.js", "MongoDB", "Express"],
      stipend: "₹18,000/month"
    }
  ];

  const filteredInternships = internships.filter((internship) =>
    internship.title.toLowerCase().includes(search.toLowerCase()) ||
    internship.company.toLowerCase().includes(search.toLowerCase()) ||
    internship.skills.some(skill =>
      skill.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="internships-page">

      <div className="internships-header">
        <h1>Find Your Internship</h1>

        <p>
          Explore internships and start building your career.
        </p>
      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="🔍 Search by role, company or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="internship-list">

        {filteredInternships.length > 0 ? (

          filteredInternships.map((internship) => (

            <div className="internship-card" key={internship.id}>

              <div className="company-logo">
                {internship.company.charAt(0)}
              </div>

              <div className="internship-content">

                <h2>{internship.title}</h2>

                <h3>{internship.company}</h3>

                <p>📍 {internship.location}</p>

                <div className="skills">

                  {internship.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

                <strong>
                  💰 {internship.stipend}
                </strong>

                <br />

                <button
                  onClick={() =>
                  navigate("/internship-details", {
                  state: { internship },
                 })
                }
                >
                View Details
                </button>

              </div>

            </div>

          ))

        ) : (

          <p className="no-results">
            No internships found.
          </p>

        )}

      </div>

    </div>
  );
}

export default Internships;