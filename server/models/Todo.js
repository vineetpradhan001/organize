import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, "Please enter todo"],
    },
    isCompleted: {
      type: Boolean,
      default: 0,
      required: [true, "Please enter isCompleted"],
    },
    date: {
      type: Date,
      required: [true, "Please enter date"],
      min: [Date.now() - 24 * 60 * 60 * 1000, "You can't add previous date"],
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", TodoSchema);
export default Todo;
