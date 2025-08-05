const express = require("express"); //la importacion de nuestro framework o libreria
const app = express(); //Crear una instancia
const port = 3000; //Puerto donde se ejecuta

//Middleware para parsear JSON
app.use(express.json());

//Nuestra primer ruta para nuestra aplicación
//Ruta metodo GET para saludo
app.get("/", (req, res) => {
  console.log("Accedieron a esta ruta");
  res.send("Hola desde tu api"); //Respuesta del endpoint raiz
});

app.get("/tienda", (req, res) => {
  console.log("accedieron a la ruta tienda");
  res.send("Bienvenido a mi negocio");
});

app.listen(port, () => {
  console.log(`El servidor se esta escuchando en http://localhost:${port}`); //Mensaje de inicio del servidor
});
