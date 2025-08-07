const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../controllers/controllerProductos");

router.get("/all", getAllProducts);
router.post("/create", createProduct);

module.exports = router;
