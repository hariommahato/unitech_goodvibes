import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  fullname: {
    type: String,
    required: [true, "Please Enter the Title"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Description"],
  },
});
export default mongoose.models?.Feedback ||
  mongoose.model("Feedback", feedbackSchema);
