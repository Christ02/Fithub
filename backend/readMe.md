
# Backend API - Food Nutrition Tracker

Este proyecto es una API para un sistema de seguimiento de nutrición, que permite a los usuarios enviar el nombre de un alimento y recibir información nutricional básica, como calorías, carbohidratos, grasas, proteínas, sodio y azúcar.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes programas instalados:

- **Node.js**: Puedes descargarlo desde [Node.js Official Website](https://nodejs.org/).
- **npm**: Viene preinstalado con Node.js, pero puedes verificar que está instalado ejecutando `npm -v` en tu terminal.
- **Postman** (opcional): Para probar los endpoints de la API, puedes descargarlo desde [Postman](https://www.postman.com/downloads/).

## Instalación

Sigue estos pasos para clonar, instalar dependencias y ejecutar el proyecto en tu máquina local:

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-proyecto-backend
```

### 2. Instalar Dependencias

Instala las dependencias del proyecto usando `npm`:

```bash
npm install
```

### 3. Crear un archivo `.env` (opcional)

Si tu API utiliza variables de entorno, como claves de API o configuraciones de base de datos, asegúrate de crear un archivo `.env` en la raíz del proyecto. Un ejemplo de configuración podría ser:

```
PORT=4000
```

### 4. Ejecutar el Servidor Localmente

Una vez que hayas instalado todas las dependencias, puedes levantar el servidor:

```bash
npm start
```

Esto ejecutará el servidor en modo de producción. Si quieres usar el modo de desarrollo con recarga automática de cambios en el código, puedes usar:

```bash
npm run dev
```

> El servidor estará escuchando en el puerto `4000` por defecto. Puedes cambiar el puerto en el archivo `.env` o en el código del servidor.

## Endpoints Disponibles

### `POST /api/foods/nutrition`

Este endpoint recibe el nombre de un alimento y devuelve su información nutricional básica.

#### Parámetros de entrada:

- **foodName**: (string) Nombre del alimento.

#### Ejemplo de solicitud:

```json
{
  "foodName": "Apple"
}
```

#### Ejemplo de respuesta:

```json
[
  {
    "nf_calories": 200,
    "nf_total_carbohydrate": 30,
    "nf_total_fat": 5,
    "nf_protein": 10,
    "nf_sodium": 150,
    "nf_sugars": 5
  }
]
```

### Errores comunes:

- **400 Bad Request**: Si no se proporciona el `foodName` en el cuerpo de la solicitud.
  
  ```json
  {
    "error": "No food name provided"
  }
  ```

- **404 Not Found**: Si el alimento no se encuentra.
  
  ```json
  {
    "error": "Food not found"
  }
  ```

## Probar la API con Postman

Si quieres probar la API usando **Postman**, sigue estos pasos:

1. **Abrir Postman**.
2. Crear una **nueva solicitud POST**.
3. En el campo URL, ingresa: `http://localhost:4000/api/foods/nutrition`.
4. En la pestaña de **Body**, selecciona **raw** y elige **JSON**.
5. Agrega el siguiente JSON de ejemplo:

   ```json
   {
     "foodName": "Apple"
   }
   ```

6. Haz clic en **Send** para enviar la solicitud y ver la respuesta.

## Estructura del Proyecto

```
/nombre-del-proyecto-backend
|-- /node_modules
|-- /routes
|   `-- foods.js    # Archivo que define las rutas relacionadas con la nutrición
|-- .env            # Archivo de configuración de entorno (opcional)
|-- server.js       # Archivo principal del servidor Express
|-- package.json    # Archivo de configuración del proyecto y dependencias
|-- README.md       # Documentación del proyecto
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para construir el backend.
- **Express.js**: Framework web para crear el API de manera eficiente.
- **Axios** : Para realizar solicitudes HTTP en el frontend.


