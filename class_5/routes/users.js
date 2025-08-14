const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { getProfile, getMyProducts } = require("../controllers/userController");

router.get("/profile", protect, getProfile);

router.get("/my-products", protect, getMyProducts);

module.exports = router;
