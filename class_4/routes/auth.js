const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

//Ruta para registrar un nuevo usuario
router.post("/register", registerUser);

//Ruta para login de usuario registrado
router.post("/login", loginUser);

module.exports = router;
