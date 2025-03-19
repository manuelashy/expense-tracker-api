import express from "express";

import mongoose from "mongoose";
import { expenseRouter } from "./Routes/expense.js";
import { userRouter } from "./Routes/user.js";

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use(expenseRouter);
app.use(userRouter);

const port = 3800;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
