const express = require("express");
const authController = require("./../controller/authController");
const userController = require("./../controller/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

router
  .route("/:id/admin")
  .patch(userController.updateUserAdmin)
  .delete(userController.deleteUserAdmin);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword", authController.resetPassword);

module.exports = router;
