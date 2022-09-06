# Threemplate
### A Three.js TypeScript template (built with **Webpack**)

The core of the template is the *src* directory, which is structured as follows:

```
src
├── assets
│   ├── models
│   ├── shaders
│   │   └── placeholder
│   │       ├── fragment.glsl
│   │       └── vertex.glsl
│   └── textures
│       └── Grid.png
├── index.html
├── index.ts
├── style
│   └── style.css
└── types
    └── glsl.d.ts
```
Webpack is configured to handle shaders in different .glsl files (thanks to the type declaration too).

Run `npm run dev` inside the project folder to start the development server (check the *package.json*).
