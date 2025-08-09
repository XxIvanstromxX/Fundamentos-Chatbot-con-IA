const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const connectDB = require("./config/db");

//Conexion con base de datos en mongo
connectDB();

app.use(express.json()); // middleware para leer el cuerpo de las solicitudes
app.use(morgan("dev")); // middleware para registrar las solicitudes HTTP

//app.use("/user", require("./routes/users"));
app.use("/products", require("./routes/products"));

app.listen(port, () => {
  console.log(`El servidor se escuchando en http://localhost:${port}`);
});
