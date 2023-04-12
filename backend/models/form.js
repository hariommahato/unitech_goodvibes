import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Enter Firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please Enter LastName"],
    },
    email:{
      type: String,
      required: [true, "Please Enter Email Address"],
    },
    number: {
      type: Number,
      required: [true, "Please Enter your contact Number"],
    },
    edulevel: {
      type: String,
      required: [true, "Please Enter Education Level"],
    },
    course: {
      type: String,
      required: [true, "Please Enter Course Name"],
    },
  },
  { timestamps: true }
);
export default mongoose.models?.StudentForm ||
  mongoose.model("StudentForm", formSchema);
