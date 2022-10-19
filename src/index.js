import "../config.js";
import "./db/connection.js";
import express from "express";
import { userRouter } from "./routes/user.router.js";
import { taskRouter } from "./routes/task.router.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
