import Form from "../models/form";
import cloudinaryConfig from "../config/cloudinaryConfig";
import catchAsyncErrors from "../middleware/catchAsyncErrors";
import cloudinary from "cloudinary";
cloudinaryConfig();

export const createFormData = catchAsyncErrors(async (req, res, next) => {
  const { firstname,lastname,email,number,edulevel,course } = req.body;

  const formdata = await Form.create({
   firstname,
   lastname,
   email,number,
   edulevel,
   course
  });

  res.status(200).json({ success: true });
});
// get Details
export const getFormDetails = catchAsyncErrors(async (req, res, next) => {
  const formdata = await Form.findById(req.query.id);
  res.status(200).json({
    success: true,
    formdata,
  });
});
export const getAllFormData = catchAsyncErrors(async (req, res, next) => {
  const formdata = await Form.find();
  res.status(200).json({
    success: true,
    formdata,
  });
});

export const updateFormData = catchAsyncErrors(async (req, res, next) => {
  const data = await Form.findById(req.query.id);
  const { firstname,lastname,email,number,edulevel,course } = req.body;

  if (!data)
    res.status(404).json({
      message: "Not Found",
    });
  if (data) {
    data.firstname =firstname ;
    data.lastname =lastname ;
    (data.email = email),
      (data.number = number),
      (data.edulevel = edulevel),
      (data.course = course);
  }

  await data.save();

  res.status(200).json({
    success: true,
  });
});

export const deleteFormData = catchAsyncErrors(async (req, res, next) => {
  const formdata = await Form.findById(req.query.id);
  if (!formdata) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }

  await Form.findByIdAndDelete(req.query.id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
});
