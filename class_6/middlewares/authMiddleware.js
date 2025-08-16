const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config(); // Carga secreto
const { JWT_SECRET } = process.env; // Debe ser robusto

const protect = async (req, res, next) => {
  //Verificar si la peticion tiene un JWT valido
  const authHeader = req.headers["authorization"]; // Formato esperado: Bearer <token>
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "No tiene un token, autrizacion denegada" });
  }

  try {
    const token = authHeader.split(" ")[1]; // Extraer token
    const decoded = jwt.verify(token, JWT_SECRET); // Verificar firma/expiración
    req.user = await User.findById(decoded.userId).select("-password"); // No incluir password
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal error" }); // Posible token inválido -> 401 sería más preciso
  }
};

module.exports = { protect };
