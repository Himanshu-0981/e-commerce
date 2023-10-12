const express = require("express");
const {
  userSignUp,
  userLogin,
  changeUserPassword,
  test,
} = require("../controllers/user_controller");

const checkUserAuth = require("../middlewares/auth_middleware");
const isAdmin = require("../middlewares/admin_middleware");

const router = express.Router();

// public routes
router.post("/signup", userSignUp);
router.post("/login", userLogin);

// protected routes
router.post("/change-password", checkUserAuth, changeUserPassword);
router.get("/test", checkUserAuth, isAdmin, test);

module.exports = router;
