<p>
Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>

<p>
Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>

</p>


## 🚀 Estructura del proyecto

Dentro de tu proyecto Astro, verás la siguiente estructura de carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   └── Hero.astro
│   │   │   └── About.astro
│   │   │   └── Experience.astro
│   │   │   └── Education.astro
│   │   │   └── Projects.astro
│   │   │   └── Skills.astro
│   │   ├── KeyBoardManager.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── cv.json
└── package.json
```

## 🚀 Empezar

### 1. Clona este [repositorio](https://github.com/JuanLpz29/minimalist-portfolio)

### 2. Añade tu contenido:
Edita el archivo `cv.json` para crear tu propio Portafolio/CV imprimible.
### 3. Lanza el servidor de desarrollo:

```bash
# Instala las dependencias
npm install

# Lanzar el servidor
npm run dev
```


Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀

## 🧞 Commands

Todos los comandos se ejecutan desde la raíz del proyecto desde una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## 🔑 Licencia

[MIT](LICENSE.txt)
