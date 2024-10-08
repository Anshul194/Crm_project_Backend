import mongoose from "mongoose";

const contentWritingSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
    ref: "Employee",
    required: true,
  },
  department_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Department",
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

const ContentWriting = mongoose.model("ContentWriting", contentWritingSchema);

export default ContentWriting;
