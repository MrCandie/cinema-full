const multer = require("multer");
const path = require("path");
const AppError = require("./../utils/app-error");

const User = require("./../model/userModel");
const catchAsync = require("./../utils/catch-async");

// const filterObj = (obj, ...allowedFields) => {
//   const newObj = {};
//   Object.keys(obj).forEach((el) => {
//     if (allowedFields.includes(el)) {
//       newObj[el] = obj[el];
//     }
//   });

//   return newObj;
// };

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     const extension = file.mimetype.split("/")[1];
//     cb(null, `$user-${Date.now()}.${path.extname(file.originalname)}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(new AppError("Not an image, please upload only images", 400), false);
//   }
//   // console.log(req.file);
// };

// const upload = multer({
//   storage: multerStorage,
//   // fileFilter: multerFilter,
// });

// const upload = multer({ dest: "/public/img" });

// exports.uploadUserPhoto = upload.single("image");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) next(new AppError("User not found", 404));
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.uploadImage = catchAsync(async (req, res, next) => {
  if (!req.files) {
    return next(new AppError("no file uploaded", 400));
  }
  let productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    return next(new AppError("please upload an image", 400));
  }
  const maxSize = 10000000;
  if (productImage.size > maxSize) {
    return next(new AppError("please upload image smaller than 10mb"));
  }

  const imagePath = path.join(
    __dirname,
    "../../client/public/images/user/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res.status(201).json({
    status: "success",
    image: {
      src: `/images/${productImage.name}`,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const body = {
    name: req.body.name,
    image: req.body.image,
  };
  const user = await User.findByIdAndUpdate(req.params.id, body, {
    new: true,
    runValidator: true,
  });

  if (!user) next(new AppError("User not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updateUserAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });

  if (!user) next(new AppError("User not found", 404));

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUserAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) next(new AppError("User not found", 404));

  res.status(204).json({
    status: "success",
    data: null,
  });
});
