import Success from "../models/successstory";
import cloudinaryConfig from "../config/cloudinaryConfig";
import ApiFeatures from "../utils/apiFeatures";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createSuccessStory = catchAsyncErrors(async (req, res, next) => {
  const { images } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "Consultancy",
  });

  const success = await Success.create({
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getSuccessStoryDetails = catchAsyncErrors(
  async (req, res, next) => {
    const success = await Success.findById(req.query.id);
    res.status(200).json({
      success: true,
      success,
    });
  }
);

export const getAllSuccessStory = catchAsyncErrors(async (req, res, next) => {
  let success = await Success.find();
  res.status(200).json({
    success: true,
    success,
  });
});

export const updateSuccessStory = catchAsyncErrors(async (req, res, next) => {
  const data = await Success.findById(req.query.id);
  const { images } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });

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

export const deleteSuccessStory = catchAsyncErrors(async (req, res, next) => {
  const success = await Success.findById(req.query.id);
  if (!success) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = success.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Success.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
