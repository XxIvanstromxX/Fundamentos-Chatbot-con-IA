const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController"); // Controladores de auth

//Ruta para registrar un nuevo usuario
router.post("/register", registerUser); // Registro

//Ruta para login de usuario registrado
router.post("/login", loginUser); // Login

module.exports = router;
