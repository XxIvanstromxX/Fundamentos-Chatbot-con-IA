const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/", getAllProducts);
router.post("/create", protect, createProduct);

module.exports = router;
