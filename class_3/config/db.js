const mongoose = require("mongoose");
const MONGO_URI = "Tu mongo uri aquí"; // Reemplaza con tu URI de MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "Chatbot",
    });
    console.log("MongoDB se conecto con exito");
  } catch (error) {
    console.log("MongoDB tuvo un error de conexión", error);
    process.exit(1);
  }
};

module.exports = connectDB;
