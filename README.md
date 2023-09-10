# ProjeTask Backend

Pequeño CRM (Customer Relationship Management) diseñado para la gestión de proyectos y tareas asociadas a usuarios. El backend está construido utilizando Node.js y Express.js y la base de datos utilizada es MongoDB.

## Configuración
Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona este repositorio:**
    ```bash
    git clone https://github.com/marvin211/PROJETask-backend.git
    ```
2. **Instala las dependencias:**
    ```bash
    npm install
    ```
3. **Configura las variables de entorno:** Crea un archivo variables.env en el directorio raíz del proyecto y configura las siguientes variables:
    ```
    DB_MONGO= <URL de la base de datos MongoDB>
    SECRETA= <Cadena de caracteres para la generación de tokens>
    ```
4. **Inicia el servidor:**
    ```bash
    npm start
    ```
El servidor estará en funcionamiento en http://localhost:4000 (o el puerto que hayas configurado).

## Rutas Disponibles
El backend proporciona las siguientes rutas y funcionalidades:

- /api/usuarios: Rutas para la creación de usuarios.
- /api/auth: Rutas para la autenticación de usuarios y obtención del usuario autenticado.
- /api/proyectos: Rutas para la gestión de proyectos (crear, obtener, actualizar y eliminar proyectos).
- /api/tareas: Rutas para la gestión de tareas relacionadas con proyectos (crear, obtener, actualizar y eliminar tareas).

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
