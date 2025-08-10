# 🤖 Fundamentos de Chatbot con IA - CCOL

<div align="center">

<img alt="chatbot banner" src="https://img.shields.io/badge/Chatbots-IA-7A5EF8?style=for-the-badge&logo=authelia&logoColor=white" />

<br/>

<a href="#-instructor"><img alt="Instructor" src="https://img.shields.io/badge/Instructor-Iván%20Martínez-0ea5e9?style=flat-square" /></a>
<a href="#-tecnologías-utilizadas"><img alt="Tech" src="https://img.shields.io/badge/Stack-Node.js%20%7C%20Express%20%7C%20MongoDB-22c55e?style=flat-square&logo=node.js&logoColor=white" /></a>
<img alt="License" src="https://img.shields.io/badge/License-ISC-6366F1?style=flat-square" />

<p>
<a href="#clase-1-introducción-a-expressjs">Clase 1</a> •
<a href="#clase-2-arquitectura-mvc-y-gestión-de-productos">Clase 2</a> •
<a href="#clase-3-persistencia-con-mongodb-y-mongoose">Clase 3</a>
</p>

</div>

Este repositorio contiene el material del curso de fundamentos para la creación de chatbots desarrollado para **CCOL (Club de Ciencias & Open Lab)**. El curso está diseñado para enseñar los conceptos básicos de desarrollo backend con Node.js y Express, como base para la construcción de chatbots inteligentes.

## 👨‍💻 Instructor
**Iván Martínez** - Desarrollador y formador especializado en tecnologías web y chatbots con IA.

## 🎯 Objetivos del Curso

- Comprender los fundamentos del desarrollo backend con Node.js
- Aprender a crear APIs RESTful con Express.js
- Dominar la estructura MVC (Modelo-Vista-Controlador)
- Establecer las bases para la integración de sistemas de chatbot
- Preparar el terreno para futuras implementaciones de IA

---

## 🧭 Tabla de contenidos

- [👨‍💻 Instructor](#-instructor)
- [🎯 Objetivos del Curso](#-objetivos-del-curso)
- [📚 Contenido del Curso](#-contenido-del-curso)
  - [Clase 1: Introducción a Express.js](#clase-1-introducción-a-expressjs)
  - [Clase 2: Arquitectura MVC y Gestión de Productos](#clase-2-arquitectura-mvc-y-gestión-de-productos)
  - [Clase 3: Persistencia con MongoDB y Mongoose](#clase-3-persistencia-con-mongodb-y-mongoose)
- [🚀 Instrucciones de Instalación](#-instrucciones-de-instalación)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📝 Próximos Pasos](#-próximos-pasos)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

## 📚 Contenido del Curso

---

### 📦 Clase 1: Introducción a Express.js
**Ubicación:** `class_1/`

**Conceptos cubiertos:**
- Configuración inicial de un proyecto Node.js
- Instalación y configuración de Express.js
- Creación de rutas básicas
- Middleware para parsing de JSON
- Estructura básica de un servidor

**Características técnicas:**
- **Framework:** Express 5.1.0
- **Puerto:** 3000
- **Script de desarrollo:** `npm run dev` (con --watch)

**Rutas implementadas:**
- `GET /` - Endpoint de saludo básico
- `GET /tienda` - Ruta de bienvenida al negocio

---

### 🧱 Clase 2: Arquitectura MVC y Gestión de Productos
**Ubicación:** `class_2/`

**Conceptos cubiertos:**
- Implementación del patrón MVC (Modelo-Vista-Controlador)
- Separación de responsabilidades con controladores y rutas
- Middleware para logging con Morgan
- Manejo de datos en memoria
- Validación de datos de entrada
- Códigos de estado HTTP apropiados

**Características técnicas:**
- **Framework:** Express 5.1.0
- **Herramientas de desarrollo:** Nodemon 3.1.10, Morgan 1.10.1
- **Script de desarrollo:** `npm run dev` (con auto-reload)

**Arquitectura:**
```
class_2/
├── app.js                          # Servidor principal
├── controllers/
│   └── controllerProductos.js     # Lógica de negocio
└── routes/
    └── productos.js               # Definición de rutas
```

**API Endpoints:**
- `GET /home` - Bienvenida al e-commerce
- `GET /producto/all` - Obtener todos los productos
- `POST /producto/create` - Crear un nuevo producto

**Modelo de datos (Productos):**
```javascript
{
  id: Number,
  nombre: String,
  precio: Number,
  categoria: String,
  descripcion: String
}
```

---

### 🗄️ Clase 3: Persistencia con MongoDB y Mongoose
**Ubicación:** `class_3/`

**Conceptos cubiertos:**
- Conexión a MongoDB con Mongoose
- Definición de modelos y validaciones (Producto)
- Controladores asíncronos y manejo de errores
- Rutas REST básicas con prefijo `/products`
- Uso de archivo `.http` para probar endpoints

**Características técnicas:**
- **Framework:** Express 5.1.0
- **Base de datos:** MongoDB (Mongoose 8.17.1)
- **Herramientas de desarrollo:** Nodemon 3.1.10, Morgan 1.10.1
- **Script de desarrollo:** `npm run dev`

**Arquitectura:**
```
class_3/
├── app.js                          # Servidor principal y middlewares
├── config/
│   └── db.js                       # Conexión a MongoDB (dbName: "Chatbot")
├── controllers/
│   └── productController.js        # Lógica de negocio de productos
├── models/
│   ├── productModel.js             # Esquema y modelo Product
│   └── userModel.js                # (vacío por ahora)
├── routes/
│   └── products.js                 # Definición de rutas de productos
└── .http                           # Ejemplos de requests
```

**API Endpoints (base: `/products`):**
- `GET /products` - Obtener todos los productos (desde MongoDB)
- `POST /products/create` - Crear un nuevo producto

**Modelo de datos (Product):**
```javascript
{
  name: String (required, unique, trim),
  description: String (required, trim),
  size: String (required, trim),
  stock: Number (required, min: 0),
  price: Number (required, min: 0),
  brand: String (required, trim),
  category: String (required, trim),
  color: String (required, trim),
  createdAt: Date (default: Date.now)
}
```

**Configuración de base de datos:**

> ⚙️ Importante: edita `config/db.js` y reemplaza `"Tu mongo uri aquí"` por tu cadena de conexión de MongoDB. El `dbName` usado es `"Chatbot"`.

**Pruebas rápidas:**

> 🧪 Tip: en el archivo `.http` hay ejemplos listos para probar `POST /products/create` y `GET /products` con la extensión REST Client.

## 🚀 Instrucciones de Instalación

### Prerequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### ▶️ Ejecutar Clase 1
```bash
cd class_1
npm install
npm run dev
```

### ▶️ Ejecutar Clase 2
```bash
cd class_2
npm install
npm run dev
```

### ▶️ Ejecutar Clase 3
```bash
cd class_3
npm install
# Antes de iniciar, configura tu URI en config/db.js
npm run dev
```

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **Morgan** - Middleware para logging HTTP
- **Nodemon** - Herramienta para desarrollo con auto-reload
- **Mongoose** - ODM para MongoDB

## 📝 Próximos Pasos

Este curso establece las bases para:

1. **Integración de bases de datos** (MongoDB)
2. **Autenticación y autorización**
3. **Integración con APIs de IA** (OpenAI, Gemini, etc.)

## 🤝 Contribuciones

Este material está desarrollado específicamente para CCOL. Para sugerencias o mejoras, contacta al instructor.

## 📄 Licencia

ISC License - Desarrollado por Iván Martínez para CCOL

---

**¿Listo para comenzar tu viaje en el desarrollo de chatbots? ¡Empecemos! 🚀**
