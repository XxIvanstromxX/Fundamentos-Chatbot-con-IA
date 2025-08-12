const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI, DATABASE_NAME } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DATABASE_NAME,
    });
    console.log("MongoDB se conecto con exito");
  } catch (error) {
    console.log("MongoDB tuvo un error de conexión", error);
    process.exit(1);
  }
};

module.exports = connectDB;
