const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 3000;

//Conexion con base de datos en mongo
connectDB();

app.use(express.json()); // middleware para leer el cuerpo de las solicitudes
app.use(morgan("dev")); // middleware para registrar las solicitudes HTTP

//Ruta para autenticar usuarios
app.use("/auth", require("./routes/auth"));

//app.use("/user", require("./routes/users"));
app.use("/products", require("./routes/products"));

app.listen(port, () => {
  console.log(`El servidor se escuchando en http://localhost:${port}`);
});
