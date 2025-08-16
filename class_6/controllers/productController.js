const Product = require("../models/productModel"); // Modelo de producto

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Se puede paginar para limitar tamaño de respuesta
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Server ERROR" }); // No filtrar detalles
  }
};

const getProductByQuery = async (req, res) => {
  const { name, brand, category } = req.query;

  try {
    const query = {};
    if (name) {
      query.name = new RegExp(name, "i"); // Busqueda insensencible a mayusculas o minusculas //camisa - Camisa - CAMISA - cAmIsA
    }
    if (brand) query.brand = new RegExp(brand, "i");
    if (category) query.category = new RegExp(category, "i");

    const products = await Product.find(query);
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

const createProduct = async (req, res) => {
  const { name, description, size, stock, price, brand, category, color } =
    req.body;

  const user = req.user; // Inyectado desde middleware protect
  if (!user) {
    return res.status(401).json({ message: "No autorizado" });
  }

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

    await newProduct.save(); // Persistir nuevo producto
    return res
      .status(201)
      .json({ message: "Se creo con exito", product: newProduct });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "server error", error: err.message });
  }
};

module.exports = { getAllProducts, createProduct, getProductByQuery };
