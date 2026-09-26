const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");
const Application = require("./models/Application");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
// Home route
app.get("/", (req, res) => {
  res.send("CampusConnect Backend is running!");
});
// Get Applications API
app.get("/api/applications/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(applications);
  } catch (error) {
    console.error("Fetch applications error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});
// Register API
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password, course } = req.body;

    if (!name || !email || !password || !course) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      course,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful!",
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        course: user.course,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.post("/api/apply", async (req, res) => {
  try {
    const {
      userId,
      internshipTitle,
      company,
      name,
      email,
      phone,
      resume,
    } = req.body;

    if (!userId || !internshipTitle || !company || !name || !email) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const newApplication = new Application({
      userId,
      internshipTitle,
      company,
      name,
      email,
      phone,
      resume,
    });

    await newApplication.save();

    res.status(201).json({
      message: "Application submitted successfully!",
      application: newApplication,
    });
  } catch (error) {
    console.error("Application error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Update Profile API
app.put("/api/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      email,
      phone,
      college,
      branch,
      year,
      skills,
      github,
      linkedin,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        college,
        branch,
        year,
        skills,
        github,
        linkedin,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});