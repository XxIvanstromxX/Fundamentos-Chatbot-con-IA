const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getProfile,
  getMyProducts,
  updatePreferences,
} = require("../controllers/userController");

router.get("/profile", protect, getProfile);

router.get("/my-products", protect, getMyProducts);

router.post("/update-preferences", protect, updatePreferences);

module.exports = router;
