import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Internships from "./pages/Internships";
import InternshipDetails from "./pages/InternshipDetails";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import Skills from "./pages/Skills";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CampusConnect</div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <a href="#internships">Internships</a>

          <a href="#jobs">Jobs</a>

          <a href="#about">About</a>

          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
          <button className="register-btn">Register</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO CAMPUSCONNECT</p>

          <h1>
            Start Your <span>Career</span> Journey Today
          </h1>

          <p className="description">
            Find internships, jobs and exciting career opportunities
            designed especially for students and freshers.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Internships
            </button>

            <button className="secondary-btn">
              Create Profile
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="internships">
        <h2>Everything You Need For Your Career</h2>

        <p className="section-text">
          One platform to discover opportunities and build your future.
        </p>

        <div className="feature-container">

          <div className="feature-card">
            <div className="icon">💼</div>

            <h3>Find Internships</h3>

            <p>
              Discover internships from different companies
              according to your skills and interests.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🚀</div>

            <h3>Find Jobs</h3>

            <p>
              Explore job opportunities suitable for
              students and fresh graduates.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">📄</div>

            <h3>Build Your Profile</h3>

            <p>
              Create your professional profile and showcase
              your skills and resume.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/internships" element={<Internships />} />

        <Route
        path="/internship-details"
        element={<InternshipDetails />}
        />

        <Route path="/apply" element={<Apply />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/skills" element={<Skills />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;