const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const protect = async (req, res, next) => {
  //Verificar si la peticion tiene un JWT valido
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "No tiene un token, autrizacion denegada" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal error" });
  }
};

module.exports = { protect };
