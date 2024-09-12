# Proyecto React con TypeScript, Vite, SCSS y Zustand

Este proyecto es una aplicación de gestión de productos que utiliza React, TypeScript, Vite, SCSS Modules, Zustand para el manejo de estado y Material-UI para la interfaz de usuario. La aplicación permite realizar CRUD (Crear y Leer) de productos consumiendo la API de FakeStore.

## Características

- **CRUD de productos**: Los usuarios pueden crear y ver productos.
- **Manejo de estado con Zustand**: Los productos se almacenan localmente en el manejador de estado.
- **Persistencia de datos**: Los productos se guardan en el localStorage para evitar pérdida de datos al recargar.
- **Interfaz moderna**: Utilización de Material-UI para componentes visuales.
- **Hash routing**: La navegación en la aplicación está implementada con HashRouter para permitir la navegación directa mediante URL.
- **Validaciones de formularios**: El formulario para la creación de productos tiene validaciones integradas.

## Tecnologías

- **React** (Librería de JavaScript para construir interfaces de usuario)
- **TypeScript** (Superconjunto tipado de JavaScript)
- **Vite** (Herramienta rápida de desarrollo para proyectos de frontend)
- **SCSS Modules** (Estilos modulares en SCSS)
- **Zustand** (Librería para manejar el estado global)
- **Material-UI** (Librería de componentes para la interfaz)
- **FakeStore API** (API pública para productos de ejemplo)

## Instalación y Configuración

### Requisitos

- Node.js versión 16 o superior.
- Un gestor de paquetes como npm o yarn.

### Pasos de instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/rodrigo-leon-react-test.git

2. Navegar al directorio del proyecto:

   ```bash
   cd rodrigo-leon-react-test

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4.  Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir el navegador y navegar a http://localhost:5173/

### Estructura del proyecto

├── src
│   ├── Components   # Componentes reutilizables como el formulario de creación y tabla
│   ├── Interfaces   # Interfaz de datos para los componentes
│   ├── Pages        # Páginas principales de la aplicación como Login y Productos
│   ├── routes       # Rutas de la aplicación
│   ├── store        # Estado global con Zustand
│   ├── Styles       # Módulos SCSS
│   ├── App.tsx      # Componente raíz de la aplicación
│   ├── main.tsx     # Punto de entrada de la aplicación
├── package.json     # Dependencias del proyecto y scripts
├── .gitignore       # Archivos y carpetas ignorados por git
├── tsconfig.json    # Configuración de TypeScript
└── README.md        # Instrucciones del proyecto

### Scripts

- **npm run dev**: Inicia el servidor de desarrollo.
- **npm run build**: Compila el proyecto para producción.

### Enpoints

- **/products**: Ruta para la página de productos.
- **/products/create**: Ruta para la página de creación de productos.
- **/users**: Ruta para la página de usuarios.
- **/404**: Ruta para la página de error 404.
- **/login**: Ruta para la página de inicio de sesión.
