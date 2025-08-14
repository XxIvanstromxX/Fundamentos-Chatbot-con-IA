# API de Tienda (Express + MongoDB)

Pequeña API para registro/login de usuarios, gestión de productos y consultas, usando Express 5, MongoDB (Mongoose) y JWT.

## ✨ Características

- Registro y login con JWT.
- Endpoints protegidos con middleware de autenticación.
- Productos: listar, buscar por query y crear (protegido).
- Perfil del usuario y listado de productos propios.
- Logging HTTP con morgan y configuración via dotenv.

## 🧱 Stack

- Node.js 18+
- Express 5
- MongoDB + Mongoose 8
- JSON Web Tokens (jsonwebtoken)
- bcryptjs, morgan, dotenv

## 📁 Estructura

```
app.js
package.json
config/
  db.js
controllers/
  authController.js
  productController.js
  userController.js
middlewares/
  authMiddleware.js
models/
  productModel.js
  userModel.js
routes/
  auth.js
  products.js
  users.js
```

## ⚙️ Variables de entorno

Crea un archivo `.env` (usa `.env.example` como plantilla):

- PORT: Puerto del servidor (por defecto 3000)
- MONGO_URI: Cadena de conexión a MongoDB (sin `dbName`)
- DATABASE_NAME: Nombre de la base de datos
- JWT_SECRET: Secreto para firmar tokens
- JWT_EXPIRATION: Expiración del token (p. ej. `1h`, `7d`)

## 🚀 Puesta en marcha

1) Copia variables: `cp .env.example .env` y edítalas.
2) Instala dependencias: `npm install`
3) Ejecuta en desarrollo: `npm run dev`

Servidor en: `http://localhost:<PORT>`

## 🔐 Autenticación

- Enviar `Authorization: Bearer <token>` en endpoints protegidos.
- Obtén el token con `/auth/login`.

## 📚 Endpoints

Auth (`/auth`)
- POST `/register` — Crear usuario.
  - Body: `{ "username": "juan", "email": "juan@dominio.com", "password": "123456" }`
- POST `/login` — Login y token.
  - Body: `{ "email": "juan@dominio.com", "password": "123456" }`

Productos (`/products`)
- GET `/` — Lista todos (público).
- GET `/search?name=camisa&brand=nike&category=ropa` — Búsqueda (público).
- POST `/create` — Crear producto (protegido).
  - Body: `{ name, description, size, stock, price, brand, category, color }`

Usuarios (`/users`)
- GET `/profile` — Perfil del usuario (protegido).
 -Autorización: Bearer <token>
- GET `/my-products` — Mis productos (protegido).

## 🗃️ Modelos (resumen)

Usuario (`models/userModel.js`)
- username (único), email (único), password (hash), preferences{}, createdAt

Producto (`models/productModel.js`)
- name (único), description, size, stock, price, brand, category, color, createdBy, createdAt

## 📝 Notas

- No compartas tu `.env` ni el `JWT_SECRET`.
- Evita loggear datos sensibles en producción.
- Considera paginación para listados grandes.
