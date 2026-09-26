import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  
   const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          CampusConnect
        </div>

        <div className="student-info">
          <div className="profile-circle">G</div>

          <h3>Student</h3>
          <p>IT Engineering</p>
        </div>

        <nav className="sidebar-menu">

  <Link to="/dashboard">🏠 Dashboard</Link>

  <Link to="/profile">👤 My Profile</Link>

  <Link to="/internships">💼 Internships</Link>

  <Link to="/applications">📋 Applications</Link>

  <Link to="/skills">⭐ My Skills</Link>

</nav>

        <button onClick={handleLogout} className="logout-btn">
        Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {user?.name || "Student"}! 👋</h1>

            <p>
              Here is what's happening with your career today.
            </p>
          </div>

          <Link to="/profile" className="profile-btn">
          My Profile
          </Link>
        </div>

        {/* Stats */}
        <div className="stats-container">

          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div>
              <h2>12</h2>
              <p>Available Internships</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div>
              <h2>3</h2>
              <p>Applications</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div>
              <h2>8</h2>
              <p>Skills Added</p>
            </div>
          </div>

        </div>

        {/* Recommended Internships */}
        <section className="internship-section">

          <div className="section-heading">
            <h2>Recommended Internships</h2>

            <Link to="/internships" className="view-all-btn">
             View All
            </Link>
          </div>

          <div className="internship-container">

            <div className="internship-card">

              <div className="company-logo">
                TCS
              </div>

              <div className="internship-content">

                <h3>Web Development Intern</h3>

                <p>Tata Consultancy Services</p>

                <div className="tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Remote</span>
                </div>

                <Link to="/internship-details" className="apply-btn">
                View Internship
                </Link>

              </div>

            </div>

            <div className="internship-card">

              <div className="company-logo">
                INF
              </div>

              <div className="internship-content">

                <h3>Software Development Intern</h3>

                <p>IT Company</p>

                <div className="tags">
                  <span>Java</span>
                  <span>SQL</span>
                  <span>Hybrid</span>
                </div>

                <Link to="/internship-details" className="apply-btn">
                View Internship
                </Link>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;