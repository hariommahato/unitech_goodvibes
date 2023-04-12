import Blog from "../models/blog";
import cloudinaryConfig from "../config/cloudinaryConfig";
import ApiFeatures from "../utils/apiFeatures";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createBlog = catchAsyncErrors(async (req, res, next) => {
  const { images, description, name } = req.body;

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "Consultancy",
  });

  const blog = await Blog.create({
    description,
    name,
    images: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(200).json({ success: true });
});
// get Details
export const getBlogDetails = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.query.id);
  res.status(200).json({
    success: true,
    blog,
  });
});

export const getAllBlog = catchAsyncErrors(async (req, res, next) => {
  const apiFeature = new ApiFeatures(Blog.find(), req.query).search();
  let blog = await apiFeature.query;
  blog = await apiFeature.query.clone();
  res.status(200).json({
    success: true,
    blog,
  });
});

export const updateBlog = catchAsyncErrors(async (req, res, next) => {
  const data = await Blog.findById(req.query.id);
  const { images, description, name } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.description = description;
    data.name = name;
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

export const deleteBlog = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.query.id);
  if (!blog) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
  const imageId = blog.images.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
  await Blog.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
