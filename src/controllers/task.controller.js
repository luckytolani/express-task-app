import * as taskService from "../services/task.service.js";

export const createTask = async (req, res, next) => {
  try {
    let taskObj = req.body;

    let createRes = await taskService.createTaskService({ ...taskObj });

    if (createRes?.status)
      return res.json({ ...createRes, message: "Success" });
    else return res.json({ ...createRes, message: "DB_ERROR" });
  } catch (error) {
    return res.json({ status: false, message: "DBError", error });
  }
};

export const getTask = async (req, res, next) => {
  try {
    let getRes = await taskService.getTaskService(req?.body || {});

    if (getRes?.status) return res.json({ ...getRes, message: "Success" });
    else return res.json({ ...getRes, message: "DB_ERROR" });
  } catch (error) {
    console.log(error);
    return res.json({ status: false, message: "DBError", error });
  }
};

// export const getUser = (_req, _res, _next) => {};
