import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const userId = user.id || user._id;

        const response = await fetch(
          `http://localhost:5000/api/applications/${userId}`
        );

        const data = await response.json();

        if (!response.ok) {
          alert(data.message);
          return;
        }

        setApplications(data);
      } catch (error) {
        console.error("Fetch applications error:", error);
        alert("Server connection failed");
      }
    };

    if (user) {
      fetchApplications();
    }
  }, [user]);

  return (
    <div className="applications-page">
      <div className="applications-box">
        <h1>My Applications</h1>

        <p>Track your internship applications</p>

        {applications.length === 0 ? (
          <div>
            <p>No applications found.</p>

            <Link to="/internships">
              Browse More Internships
            </Link>
          </div>
        ) : (
          applications.map((application) => (
            <div className="application-card" key={application._id}>
              <h2>{application.internshipTitle}</h2>

              <p>
                <strong>{application.company}</strong>
              </p>

              <p>📍 Pune / Remote</p>
              <p>📅 Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span>{application.status}</span>
              </p>
            </div>
          ))
        )}

        <br />

        <Link to="/internships">
          Browse More Internships
        </Link>
      </div>
    </div>
  );
}

export default Applications;