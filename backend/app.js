const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/taskRoutes"));
app.use("/api", require("./routes/expenseRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
module.exports = app;
