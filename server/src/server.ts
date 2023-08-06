import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

import itemRouter from "./routers/item.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/items", itemRouter);
app.use("/users", userRouter);

const port = 5500;
app.listen(port, () => {
  console.log("Server located on port: " + port);
});
