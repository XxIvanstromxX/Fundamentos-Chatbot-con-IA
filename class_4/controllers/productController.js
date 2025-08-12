const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server ERROR" });
  }
};

const createProduct = async (req, res) => {
  const { name, description, size, stock, price, brand, category, color } =
    req.body;

  const user = req.user;

  if (
    !name ||
    !description ||
    !size ||
    !stock ||
    !price ||
    !brand ||
    !category ||
    !color
  ) {
    return res.status(400).json({ message: "todos los campos son requeridos" });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      size,
      stock,
      price,
      brand,
      category,
      color,
      createdBy: user._id,
    });

    await newProduct.save();
    return res
      .status(201)
      .json({ message: "Se creo con exito", product: newProduct });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error", error: err.message });
  }
};

module.exports = { getAllProducts, createProduct };
