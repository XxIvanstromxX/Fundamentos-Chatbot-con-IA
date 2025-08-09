const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.post("/create", createProduct);

module.exports = router;
