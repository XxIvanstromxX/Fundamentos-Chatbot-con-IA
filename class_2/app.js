const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.json()); // middleware para leer el cuerpo de las solicitudes
app.use(morgan("dev")); // middleware para registrar las solicitudes HTTP

app.get("/home", (req, res) => {
  res.status(200).json({ message: "Bienvenido a mi e-commerce" });
});

app.use("/producto", require("./routes/productos"));

app.listen(port, () => {
  console.log(`El servidor se escuchando en http://localhost:${port}`);
});
