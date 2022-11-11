import { environment } from "../config.js";
import "./db/connection.js";
import express from "express";
import { taskRouter } from "./routes/task.router.js";

const app = express();

const PORT = environment.PORT || 5000;

app.use(express.json());
app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(
    `server is running in port ${PORT}`,
    `\nEnvironment ==  ${environment.NODE_ENV || 'docker'}`
  );
});
