# FitHub - Plataforma de Seguimiento de Salud y Bienestar

## Visión General

FitHub es una plataforma diseñada para permitir a los usuarios registrar y monitorear sus hábitos diarios relacionados con la salud y el bienestar, incluyendo la alimentación, el ejercicio, y el sueño. También incluye una calculadora de calorías adaptativa que ayuda a los usuarios a determinar sus necesidades diarias basadas en sus objetivos de salud.

## Características

- **Dashboard**: Resumen diario de la actividad, el sueño y la ingesta de alimentos.
- **Registro de Comidas**: Permite a los usuarios registrar sus comidas y ver un resumen nutricional diario.
- **Registro de Ejercicio**: Registro de las actividades físicas, incluyendo el tipo de ejercicio, duración y calorías quemadas.
- **Registro de Sueño**: Registro de las horas de sueño y un análisis básico de la calidad del sueño.
- **Perfil de Usuario**: Información personal, fotos de progreso, y medidas físicas.
- **Calculadora de Calorías**: Un cuestionario que determina las necesidades calóricas diarias basadas en la información personal del usuario.

## Estructura del Proyecto

```plaintext
/frontend
├── /assets                  # Recursos estáticos como imágenes y fuentes
├── /components              # Componentes reutilizables
│   ├── /Calculator          # Calculadora de calorías
│   ├── /Dashboard           # Componente del Dashboard
│   ├── /FoodLog             # Componente del registro de comidas
│   ├── /Header              # Componente de la cabecera
│   ├── /FooterNav           # Componente de navegación inferior
│   └── /Profile             # Componente del perfil de usuario
├── /pages                   # Páginas principales de la aplicación
│   ├── DashboardPage.jsx
│   ├── FoodLogPage.jsx
│   ├── ExercisePage.jsx
│   ├── SleepPage.jsx
│   ├── ProfilePage.jsx
│   ├── CalculatorPage.jsx
│   └── SettingsPage.jsx
├── App.jsx                  # Componente principal de la aplicación
├── index.css                # Estilos globales
├── main.jsx                 # Punto de entrada de la aplicación React
├── .gitignore               # Archivos y carpetas a ignorar por Git
├── vite.config.js           # Configuración de Vite
└── README.md                # Documentación del proyecto
```
## Instalación
Para trabajar en este proyecto, sigue estos pasos:

### Clona el repositorio:

```bash
git clone https://github.com/Christ02/Fithub.git
cd frontend
```

```bash
npm install
```

Dependencias adicionales necesarias:

- React Router DOM: Para la navegación entre páginas.
- React Icons: Para añadir íconos fácilmente en los componentes.
- date-fns: Para el manejo de fechas y formateo.
- react-datepicker: Selector de fechas amigable y customizable.
- sweetalert2: Para alertas modales atractivas y personalizables.

Puedes instalarlas todas con el siguiente comando:

```bash
npm install react-router-dom react-icons date-fns react-datepicker sweetalert2
```
Inicia el servidor de desarrollo:

```bash
npm run dev
```
Compila para producción:

```bash
npm run build
```
Previsualiza la versión de producción:

```bash
npm run preview
```
