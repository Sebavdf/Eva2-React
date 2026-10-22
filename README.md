# Clínica Nutricional NutriVida - Frontend React

Este repositorio contiene la migración completa de las vistas estáticas (HTML/CSS) de la Clínica Nutricional NutriVida hacia una Single Page Application (SPA) moderna desarrollada con React.

## 📋 Sobre el Proyecto

En esta instancia se traspasó toda las páginas HTML y CSS a React. El proyecto adopta un enfoque basado en componentes para mejorar la escalabilidad, la mantenibilidad del código y la experiencia de usuario mediante una navegación fluida sin recargas de página.

## 🛠️ Tecnologías y Herramientas

*   **Framework:** React
*   **Build Tool:** Vite (garantiza un entorno de desarrollo rápido y optimizado)
*   **Testing:** Vitest (framework de pruebas unitarias rápido y nativo de Vite)
*   **Linter:** ESLint (para mantener la calidad y el estándar del código)
*   **Gestor de Paquetes:** npm

## 📁 Estructura del Proyecto

```
Eva2-React/
 ┣ public/              # Recursos estáticos (favicon, imágenes públicas)
 ┣ src/                 # Código fuente de la aplicación
 ┃ ┣ assets/            # Imágenes, íconos y otros recursos multimedia
 ┃ ┣ components/        # Componentes reutilizables (Navbar, Footer, etc.)
 ┃ ┣ pages/             # Componentes de vista (Home, Servicios, Contacto, etc.)
 ┃ ┣ App.jsx            # Configuración de rutas y layout principal
 ┃ ┗ main.jsx           # Punto de entrada de la aplicación
 ┣ eslint.config.js     # Configuración de reglas de linting
 ┣ vite.config.js       # Configuración del empaquetador Vite
 ┗ vitest.config.js     # Configuración del entorno de pruebas
```

## 🚀 Instalación y Ejecución
Para ejecutar este proyecto en tu entorno local, asegúrate de tener Node.js instalado.

**1. Clonar el repositorio:**

git clone [https://github.com/tu-usuario/Eva2-React.git](https://github.com/tu-usuario/Eva2-React.git)
cd Eva2-React

**2. Instalar las dependencias:**

npm install

**3. Iniciar el servidor de desarrollo:**

npm run dev

## 🧪 Pruebas
Este proyecto utiliza Vitest para la ejecución de pruebas.

**Para correr la suite de tests, utiliza el siguiente comando:**

npm run test
