import { Task } from "../model/task.js";

export const createTaskService = async (taskObj) => {
  try {
    const task = new Task({
      ...taskObj,
    });

    return { status: true, data: await task.save() };
  } catch (error) {
    return { status: false, error };
  }
};

export const getTaskService = async (filter) => {
  try {
    let data = await Task.findOne({ ...filter });

    if (data) return { status: true, message: "Success", data };

    return { status: false, message: "User Not Found" };
  } catch (error) {
    return { status: false, message: "DB Error", error };
  }
};

// export const updateUserService = async (email, updateObj) => {
//   try {
//     let updateRes = User.findOneAndUpdate({ email }, { ...updateObj });

//     if (updateRes) return { status: true, message: "Success", data: updateRes };

//     return { status: false, message: "User Not Found" };
//   } catch (error) {
//     return { status: false, message: "DB Error", error };
//   }
// };

// export const deleteUserService = async (email) => {
//   try {
//     let deleteRes = User.findOneAndDelete({ email });

//     if (deleteRes) return { status: true, message: "Success" };

//     return { status: false, message: "User Not Found" };
//   } catch (error) {
//     return { status: false, message: "DB Error", error };
//   }
// };
