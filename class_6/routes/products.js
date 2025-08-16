const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductByQuery,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware"); // Middleware JWT

router.get("/", getAllProducts); // Público lectura

router.get("/search", getProductByQuery);

router.post("/create", protect, createProduct); // Protegido creación

module.exports = router;
