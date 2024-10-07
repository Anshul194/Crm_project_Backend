import mongoose from "mongoose";
import department from "../model/department.js";
import Employee from "../model/employee.js";

//Add new Department
export const addDepartment = async (req, res) => {
  try {
    const { name } = req.body;

    const user = req.user;

    if (!user.isAdmin) {
      return res
        .status(401)
        .json({ message: "You do not have permission to access this page." });
    }

    const isExistDepartment = await department.findOne({ name: name });

    if (!name) {
      return res
        .status(400)
        .json({ message: "Please provide required field!" });
    }

    if (isExistDepartment) {
      return res.status(409).json({ message: "Department already exist!" });
    }

    const newDepartment = new department({
      name: name,
    });
    await newDepartment.save();
    return res
      .status(200)
      .json({ message: "New department added successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Removed department
export const removeDepartment = async (req, res) => {
  try {
    const { id } = req.headers;
    const isExistDepartment = await department.findById(id);
    if (!isExistDepartment) {
      return res.status(404).json({ message: "Department is not exist!" });
    }
    await department.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Department Removed successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

//Get All Departments
export const getAllDepartments = async (req, res) => {
  try {
    const user = req.user;

    const emp = await Employee.findById(user.id);
    if (!emp) {
      return res.status(404).json({ message: "Employee not found!" });
    }

    //CEO can access all departments
    if (emp.post == "CEO") {
      const allDepartments = await department.find().sort({ createdAt: -1 });

      return res
        .status(200)
        .json({ message: "Getting All Departments details!", allDepartments });
    }

    //Others can access only their own departments
    const allDepartments = await department.find({
      _id: { $in: emp.departments },
    });

    return res
      .status(200)
      .json({ message: "Getting your departments details!", allDepartments });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};
