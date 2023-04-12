import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Please Enter the Message "],
  },

});
export default mongoose.models?.About || mongoose.model("About", aboutSchema);
