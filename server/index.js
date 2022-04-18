import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserModel from "./models/Users.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;

  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
