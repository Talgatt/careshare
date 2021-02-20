import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouters.js";
import expressAsyncHandler from "express-async-handler";
//import User from "./models/userModel";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect("mongodb://localhost/kidshare", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("server running");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
