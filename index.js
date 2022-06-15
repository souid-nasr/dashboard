require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const connection = require("./db");
const studentRoutes = require("./routes/studentRoutes");
const institutionRoutes = require("./routes/institutionRoutes");
const adminRoutes = require("./routes/adminRoutes.js");
const moderatorRoutes = require("./routes/moderatorRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");
const router = require("./routes/task.js");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/students/", studentRoutes);
app.use("/api/institutions/",institutionRoutes)
app.use("/api/admin/",adminRoutes)
app.use("/api/moderators/",moderatorRoutes)
app.use("/api/courses/",courseRoutes)
app.use("/api/orderinstitution/",courseRoutes)
app.use("/api/tasks/",router)
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'Frontend/build')));
    app.get("*", (req, res)=> {
      res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'));
    })
  } else{
    app.get("/", (req, res)=> {
      res.send("API running...");
    })
  }



app.listen(port, console.log(`Listening on port ${port}...`));