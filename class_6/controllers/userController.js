const Product = require("../models/productModel");

const getProfile = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Usuario no Autorizado" });
  }

  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};

const getMyProducts = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Usuario no Autorizado" });
  }

  try {
    const query = { createdBy: user._id };
    const products = await Product.find(query);
    if (!products || products.length === 0) {
      return res.status(401).json({ message: "No se encontraros productos" });
    }
    //Se puede paginar para limitar el tamaño de la respuesta
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "internal error" });
  }
};

const updatePreferences = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: "Usuario no Autorizado" });
  }
  try {
    const { preferences } = req.body;
    if (!preferences) {
      return res.status(400).json({ message: "Faltan preferencias" });
    }
    user.preferences = preferences;
    await user.save();
    res
      .status(200)
      .json({ message: "Preferencias actualizadas correctamente" });
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};

module.exports = {
  getProfile,
  getMyProducts,
  updatePreferences,
};
