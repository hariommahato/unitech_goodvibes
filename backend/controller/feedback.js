import Feedback from "../models/feedback";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createFeedback = catchAsyncErrors(async (req, res, next) => {
  const { fullname, message, images } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "Consultancy",
  });

  const feedback = await Feedback.create({
    fullname,
    message,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getFeedbackDetails = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.findById(req.query.id);
  res.status(200).json({
    success: true,
    feedback,
  });
});

export const getAllFeedback = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.find();
  res.status(200).json({
    success: true,
    feedback,
  });
});

export const updateFeedback = catchAsyncErrors(async (req, res, next) => {
  const data = await Feedback.findById(req.query.id);
  const { fullname, images, message } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.fullname = fullname;
    data.message = message;
  }

  if (images !== "") {
    const result = await cloudinary.v2.uploader.upload(images, {
      folder: "Consultancy",
    });
    await cloudinary.v2.uploader.destroy(data?.images?.public_id);
    data.images = { public_id: result.public_id, url: result.secure_url };
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteFeedback = catchAsyncErrors(async (req, res, next) => {
  const feedback = await Feedback.findById(req.query.id);
  if (!feedback) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = feedback.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Feedback.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
