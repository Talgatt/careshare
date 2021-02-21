import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouters.js";
import partnerRouter from "./routers/partnerRouter.js";
import expressAsyncHandler from "express-async-handler";
import uploadRouter from "./routers/uploadRouter.js";
import path from "path";
import axios from "axios";

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
app.use("/api/partners", partnerRouter);
app.use("/api/uploads", uploadRouter);

app.get("/api/config/google", (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || "");
});

app.get("/api/config/geolocation/:addressPO", async (req, res) => {
  const addressPO = req.params.addressPO;
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_API_KEY}&components=postal_code:${addressPO}`
  );

  res.send(data.results[0].geometry.location);
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("server running");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
