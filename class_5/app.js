const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config(); // Carga variables de entorno (no hardcodear secretos)
const port = process.env.PORT || 3000; // Puerto configurable

//Conexion con base de datos en mongo
connectDB(); // Conectar DB antes de atender peticiones

app.use(express.json()); // Parser JSON (podrías limitar tamaño para evitar abuso)
app.use(morgan("dev")); // Logging HTTP (no loggear datos sensibles en prod)

//Ruta para autenticar usuarios
app.use("/auth", require("./routes/auth")); // Rutas de autenticación

//Ruta para manejo de productos
app.use("/products", require("./routes/products")); // CRUD productos (crear requiere token)

//Ruta para menajo de usuarios
app.use("/users", require("./routes/users")); // CRUD usuarios (crear requiere token)

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`); // En prod usar logs estructurados
});
