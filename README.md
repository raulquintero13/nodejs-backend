Proyecto final

Api de un crud de Explorers y Mission Comanders

Requerimientos

 - Servidor Postgresql, usuario y contraseña
 - Aplicacion Vue del repositorio: https://github.com/raulquintero13/client-launchx.git

Instalar proyecto
```
npm install
```

renombrar archivo .env_demo a .env y cambiar usuario y contraseña
```
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
```

Inicializar BD
```
npx prisma migrate dev --name init
```
Insertar Datos 
```
node prisma/seed.js
```

Ahora si, todo listo para levantar el servidor
```
npm run serve
```

endpoints for Explorers
method|url|descripcion
|---|---|---|
get | /explorers | Obtener lista de explorers
get | /explorers/:id | Obtener info de un explorer por id
post | /explorers | Agregar Nuevo explorer
put | put /explorers/:id | Actualizar explorer
delete | /explorers/:id | Borar explorer


endpoints for Mission Commanders
method|url|descripcion
|---|---|---|
get | /mc | Obtener lista de MC
get | /mc/:id | Obtener info de un MC por id
post | /mc | Agregar Nuevo MC
put | /mc/:id | Actualizar MC
delete | /mc/:id | Borar MC

Respuesta estandar de la API
```
{
   success: Boolean, // indica si hubo algun error al tratar de resolver la peticion
   code: string,     // codigo de error
   msg: string,      // mensaje de error o confirmacion
   payload: array,   // informacion entregada en la respuesta al cliente
}
```

Pruebas Unitarias

Solo se aplicaron algunas pruebas unitarias, quedan pendientes las pruebas unitarias relacionadas
con las bases de datos 
- server.test.js
- /services/FormatService.test.js
status

Diagrama del proceso de las aplicaciones

![diagramaProceso](https://user-images.githubusercontent.com/2847834/167985937-ba0c6680-7f3d-42fa-8f17-6644179730ce.png)
