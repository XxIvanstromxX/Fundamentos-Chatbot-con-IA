const productos = [
  {
    id: 1,
    nombre: "Tenis Nike",
    precio: 120,
    categoria: "Calzado",
    descripcion: "Tenis deportivos Nike Air Max",
  },
  {
    id: 2,
    nombre: "Camisa Polo",
    precio: 45,
    categoria: "Ropa",
    descripcion: "Camisa de algodón de la marca Polo Ralph Lauren",
  },
  {
    id: 3,
    nombre: "Reloj Casio",
    precio: 80,
    categoria: "Accesorios",
    descripcion: "Reloj digital Casio resistente al agua",
  },
];

const getAllProducts = (req, res) => {
  res.status(200).json(productos);
};

const createProduct = (req, res) => {
  const { id, nombre, precio, categoria, descripcion } = req.body;

  if (!id || !nombre || !precio) {
    res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  const newProduct = {
    id,
    nombre,
    precio,
    categoria,
    descripcion,
  };

  productos.push(newProduct);
  res.status(201).json({ message: "Producto creado", product: newProduct });
};

module.exports = { getAllProducts, createProduct };
