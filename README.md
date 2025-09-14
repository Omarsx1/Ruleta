# 🎮 Fortnite Ruleta

Una ruleta interactiva con temática de Fortnite construida con Astro y TailwindCSS.

## 🚀 Características

- ✨ Diseño moderno con temática de Fortnite
- 🎯 Ruleta completamente funcional con animaciones suaves
- 📱 Diseño responsivo para todos los dispositivos
- 🎨 Colores y estilos inspirados en Fortnite
- ⚡ Construido con Astro para máximo rendimiento
- 🎪 Componentes separados y reutilizables

## 🛠️ Tecnologías

- **Astro** - Framework web moderno
- **TailwindCSS** - Framework de CSS utilitario
- **JavaScript** - Funcionalidad interactiva

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro     # Cabecera con temática Fortnite
│   │   ├── Ruleta.astro     # Componente principal de la ruleta
│   │   └── Footer.astro     # Pie de página con estadísticas
│   └── pages/
│       └── index.astro      # Página principal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎯 Cómo usar

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre tu navegador en `http://localhost:4321`

4. ¡Haz clic en "GIRAR RULETA" y disfruta!

## 🎨 Personalización

Los colores de Fortnite están definidos en `tailwind.config.mjs`:

- `fortnite-blue`: #00D4FF
- `fortnite-purple`: #8B5CF6
- `fortnite-yellow`: #FFD700
- `fortnite-orange`: #FF6B35
- `fortnite-pink`: #FF1493
- `fortnite-green`: #32CD32
- `fortnite-dark`: #1a1a2e
- `fortnite-darker`: #16213e

## 📝 Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                   |
| `npm run dev`          | Inicia el servidor local en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Previsualiza la construcción localmente antes de desplegar |

## 🎮 Características de la Ruleta

- 8 segmentos coloridos con opciones personalizables
- Animación suave de giro con easing personalizado
- Indicador visual del resultado
- Estadísticas de giros en el footer
- Efectos visuales y animaciones temáticas

¡Disfruta girando la ruleta! 🎉
