# 🤖 Fundamentos de Chatbot con IA - CCOL

Este repositorio contiene el material del curso de fundamentos para la creación de chatbots desarrollado para **CCOL (Club de Ciencias & Open Lab)**. El curso está diseñado para enseñar los conceptos básicos de desarrollo backend con Node.js y Express, como base para la construcción de chatbots inteligentes.

## 👨‍💻 Instructor
**Iván Martínez** - Desarrollador y formador especializado en tecnologías web y chatbots con IA.

## 🎯 Objetivos del Curso

- Comprender los fundamentos del desarrollo backend con Node.js
- Aprender a crear APIs RESTful con Express.js
- Dominar la estructura MVC (Modelo-Vista-Controlador)
- Establecer las bases para la integración de sistemas de chatbot
- Preparar el terreno para futuras implementaciones de IA

## 📚 Contenido del Curso

### Clase 1: Introducción a Express.js
**Ubicación:** `class_1/`

**Conceptos cubiertos:**
- Configuración inicial de un proyecto Node.js
- Instalación y configuración de Express.js
- Creación de rutas básicas
- Middleware para parsing de JSON
- Estructura básica de un servidor

**Características técnicas:**
- **Framework:** Express 5.1.0
- **Script de desarrollo:** `npm run dev` (con --watch)

**Rutas implementadas:**
- `GET /` - Endpoint de saludo básico
- `GET /tienda` - Ruta de bienvenida al negocio

### Clase 2: Arquitectura MVC y Gestión de Productos
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

## 🚀 Instrucciones de Instalación

### Prerequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Ejecutar Clase 1
```bash
cd class_1
npm install
npm run dev
```

### Ejecutar Clase 2
```bash
cd class_2
npm install
npm run dev
```

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **Morgan** - Middleware para logging HTTP
- **Nodemon** - Herramienta para desarrollo con auto-reload

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