const express = require("express");
const authController = require("./../controller/authController");
const userController = require("./../controller/userController");
const ticketRouter = require("./../routes/ticket-router");

const router = express.Router();

router.use("/:userId/ticket", ticketRouter);

router.get("/", userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

router.post("/uploadProfile", userController.uploadImage);

router
  .route("/:id/admin")
  .patch(userController.updateUserAdmin)
  .delete(userController.deleteUserAdmin);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch("/updateMyPassword/:id", authController.updatePassword);

module.exports = router;
