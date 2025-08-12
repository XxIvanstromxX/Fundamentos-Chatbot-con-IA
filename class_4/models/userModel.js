const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Definición del usuario
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Normaliza correo
    match: /.+\@.+\..+/, // Regex simple (se puede mejorar)
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Aumentar para mayor seguridad
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
