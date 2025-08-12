const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config;
const { JWT_SECRET, JWT_EXPIRATION } = process.env;

//Registro de un usuario nuevo
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son requirdos" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(existingUser);
      return res.status(400).json({ message: "El ususario ya existe" });
    }

    //Hash de la contreseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Crear el usuario nuevo
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "El usauario a sido registrado con exito" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Todas las credenciales son necesarias" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.satus(400).json({ message: "Email o password invalidas" });
    }

    console.log(user);

    // Validar la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email o password invalidas" });
    }

    //Generate JWT
    const payload = {
      userId: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION,
    });

    return res.status(200).json({
      message: "Login exitoso",
      token,
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
