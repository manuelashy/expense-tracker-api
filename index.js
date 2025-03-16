import express from "express";

import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());

const port = 3800;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
