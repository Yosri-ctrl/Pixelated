const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");

const app = express();
// const router = express.Router();

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.get("/", (req, res) => {
//   res.send("AFAFAFaf");
// });

// paths
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

// app
app.listen(8800, () => {
  console.log("Backend server is running!");
});
