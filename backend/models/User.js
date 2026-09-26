const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },
    phone: {
  type: String,
  default: "",
},

college: {
  type: String,
  default: "",
},

branch: {
  type: String,
  default: "",
},

year: {
  type: String,
  default: "",
},

skills: {
  type: String,
  default: "",
},

github: {
  type: String,
  default: "",
},

linkedin: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);