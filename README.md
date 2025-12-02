# Vayven API

Sistema de gestión de unidades de transporte construido con **Node.js**, **Express** y **MySQL**.

Este proyecto fue migrado exitosamente desde CodeIgniter 4 (PHP) a Node.js.

## 🚀 Características

- API RESTful completa
- Gestión de unidades de transporte (CRUD completo)
- Base de datos MySQL con connection pooling
- Middleware de seguridad con Helmet
- CORS configurable
- Manejo de errores centralizado
- Validación de datos
- Variables de entorno para configuración

## 📋 Requisitos

- Node.js >= 18.0.0
- MySQL >= 5.7 o MariaDB >= 10.2
- npm o yarn

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd vayven
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Copiar el archivo de ejemplo y configurarlo:
   ```bash
   copy .env.example .env
   ```
   
   Editar `.env` con tus configuraciones:
   ```env
   NODE_ENV=development
   PORT=3000
   HOST=localhost

   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=vayven

   ALLOWED_ORIGINS=http://localhost:3000
   ```

4. **Crear la base de datos**
   
   Ejecutar el siguiente SQL en tu servidor MySQL:
   ```sql
   CREATE DATABASE vayven CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   
   USE vayven;
   
   CREATE TABLE unidad (
       id INT AUTO_INCREMENT PRIMARY KEY,
       placa_unidad VARCHAR(20) NOT NULL,
       modelo_unidad VARCHAR(100),
       capacidad_unidad INT,
       estado_unidad VARCHAR(50),
       Ruta_id_ruta INT,
       Ubicacion_id_ubicacion INT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

5. **Iniciar el servidor**

   Modo desarrollo (con nodemon):
   ```bash
   npm run dev
   ```
   
   Modo producción:
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Unidades

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/unidad` | Listar todas las unidades |
| POST | `/unidad/agregar` | Crear una nueva unidad |
| PUT | `/unidad/editar/:id` | Actualizar una unidad |
| DELETE | `/unidad/eliminar/:id` | Eliminar una unidad |

### Ejemplos de uso

#### Listar todas las unidades
```bash
curl http://localhost:3000/api/unidad
```

#### Crear una nueva unidad
```bash
curl -X POST http://localhost:3000/api/unidad/agregar \
  -H "Content-Type: application/json" \
  -d '{
    "placa_unidad": "ABC-123",
    "modelo_unidad": "Toyota Hiace",
    "capacidad_unidad": 15,
    "estado_unidad": "activo",
    "Ruta_id_ruta": 1,
    "Ubicacion_id_ubicacion": 1
  }'
```

#### Actualizar una unidad
```bash
curl -X PUT http://localhost:3000/api/unidad/editar/1 \
  -H "Content-Type: application/json" \
  -d '{
    "estado_unidad": "inactivo"
  }'
```

#### Eliminar una unidad
```bash
curl -X DELETE http://localhost:3000/api/unidad/eliminar/1
```

## 📁 Estructura del Proyecto

```
vayven/
├── src/
│   ├── config/
│   │   ├── app.js           # Configuración general
│   │   └── database.js      # Configuración de MySQL
│   ├── controllers/
│   │   ├── homeController.js
│   │   └── unidadesController.js
│   ├── models/
│   │   └── UnidadModel.js
│   ├── routes/
│   │   ├── index.js         # Rutas principales
│   │   └── api.js           # Rutas de la API
│   ├── views/
│   │   └── welcome.ejs
│   ├── app.js               # Configuración de Express
│   └── server.js            # Punto de entrada
├── public/                  # Archivos estáticos
├── writable/                # Archivos de logs y cache
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **MySQL2** - Cliente MySQL con soporte para Promises
- **EJS** - Motor de plantillas
- **Helmet** - Middleware de seguridad
- **CORS** - Manejo de Cross-Origin Resource Sharing
- **dotenv** - Gestión de variables de entorno
- **nodemon** - Auto-recarga en desarrollo

## 🔒 Seguridad

- Helmet para headers de seguridad HTTP
- CORS configurable
- Validación de datos de entrada
- Connection pooling para la base de datos
- Variables de entorno para credenciales sensibles

## 📝 Notas de Migración

Este proyecto fue migrado desde CodeIgniter 4 (PHP) a Node.js. Los cambios principales incluyen:

- **Lenguaje**: PHP → JavaScript (ES6+)
- **Framework**: CodeIgniter 4 → Express.js
- **ORM**: CodeIgniter Models → MySQL2 con clases personalizadas
- **Motor de vistas**: PHP → EJS
- **Gestión de paquetes**: Composer → npm
- **Servidor web**: Apache/Nginx + PHP-FPM → Node.js integrado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📄 Licencia

MIT License

---

Desarrollado con ❤️ usando Node.js

