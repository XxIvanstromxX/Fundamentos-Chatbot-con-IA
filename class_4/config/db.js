const mongoose = require("mongoose");
require("dotenv").config(); // Evita exponer credenciales en código
const { MONGO_URI, DATABASE_NAME } = process.env; // Variables seguras

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DATABASE_NAME, // Usa nombres distintos por entorno
    });
    console.log("MongoDB se conecto con exito");
  } catch (error) {
    console.log("MongoDB tuvo un error de conexión", error); // No exponer detalle a cliente
    process.exit(1);
  }
};

module.exports = connectDB;
