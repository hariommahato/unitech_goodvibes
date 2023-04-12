import mongoose from "mongoose";

const successStorySchema = new mongoose.Schema({
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
  
});
export default mongoose.models?.SuccessStory ||
  mongoose.model("SuccessStory", successStorySchema);
