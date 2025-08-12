const bcrypt = require("bcryptjs"); // Hash seguro
const jwt = require("jsonwebtoken"); // Tokens stateless
const User = require("../models/userModel");
require("dotenv").config(); // Paréntesis faltante corregido
const { JWT_SECRET, JWT_EXPIRATION } = process.env; // Mantener secreto privado

//Registro de un usuario nuevo
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son requirdos" }); // Validación básica
  }

  try {
    const existingUser = await User.findOne({ email }); // Evita duplicados
    if (existingUser) {
      console.log(existingUser);
      return res.status(400).json({ message: "El ususario ya existe" });
    }

    //Hash de la contreseña
    const salt = await bcrypt.genSalt(10); // Cost configurable
    const hashedPassword = await bcrypt.hash(password, salt); // No guardar texto plano

    //Crear el usuario nuevo
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "El usauario a sido registrado con exito" }); // No incluir password
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal error" }); // Mensaje genérico
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Todas las credenciales son necesarias" }); // Validación input
  }

  try {
    const user = await User.findOne({ email }); // Buscar usuario
    if (!user) {
      return res.status(400).json({ message: "Email o password invalidas" }); // Respuesta uniforme
    }

    console.log(user);

    // Validar la password
    const isMatch = await bcrypt.compare(password, user.password); // Comparar hash
    if (!isMatch) {
      return res.status(400).json({ message: "Email o password invalidas" });
    }

    //Generate JWT
    const payload = {
      userId: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION, // Limita ventana de ataque
    });

    return res.status(200).json({
      message: "Login exitoso",
      token, // Considerar cookie httpOnly
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal error" }); // No detalles
  }
};

module.exports = {
  registerUser,
  loginUser,
};
