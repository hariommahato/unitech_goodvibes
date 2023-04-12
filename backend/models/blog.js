import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: [true, "Please Enter the Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  }
});
export default mongoose.models?.Blog ||
  mongoose.model("Blog", blogSchema);
