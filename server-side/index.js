const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.SERVER_PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
const taskRoutes = require("./routes/tasksRoute");

app.use(cors());

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
