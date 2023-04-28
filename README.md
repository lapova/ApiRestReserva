# Api Rest Reserva

1. server.js

Este es el archivo principal de la aplicación. Contiene la configuración del servidor y establece la conexión con la base de datos. Además, carga el controlador de reservas y escucha en el puerto 3000.

2. modeloReserva.js

Este archivo contiene el modelo de datos de reserva, que define la estructura de la colección en la base de datos MongoDB. Se define un esquema con los campos necesarios para hacer una reserva.

3. controladorReserva.js

Este archivo contiene la definición de las operaciones de la API REST. Se definen cuatro operaciones básicas: GET, POST, PUT y DELETE. Cada una de estas operaciones realiza una tarea específica en la base de datos de acuerdo con los parámetros enviados.

GET /reservas/:id: Obtiene una reserva específica de la base de datos según su ID.
POST /reservas: Agrega una nueva reserva a la base de datos.
DELETE /reservas/:id: Elimina una reserva específica de la base de datos según su ID.
PUT /reservas/:id: Actualiza los datos de una reserva específica en la base de datos según su ID.
Además, también se utiliza el paquete underscore para seleccionar solo los campos necesarios para la actualización.

4. package.json

Este archivo contiene la información del proyecto, como el nombre, la versión y las dependencias. También define los comandos para ejecutar el servidor y las pruebas.
