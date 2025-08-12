const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware"); // Middleware JWT

router.get("/", getAllProducts); // Público lectura
router.post("/create", protect, createProduct); // Protegido creación

module.exports = router;
