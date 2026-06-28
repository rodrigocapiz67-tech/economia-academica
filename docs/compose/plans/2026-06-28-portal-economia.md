# Portal de Economía Académica - Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear un sitio web estático para compartir material de estudio de economía con alumnos de semestres iniciales.

**Architecture:** HTML + CSS + JS puro, organizado por materias, hospedado en GitHub Pages.

**Tech Stack:** HTML5, CSS3, JavaScript vanilla

## Global Constraints

- Sin frameworks externos (vanilla JS/CSS)
- Diseño responsive (mobile-first)
- Contenido en español
- Hosting gratuito vía GitHub Pages

---

## Task 1: Estructura base del proyecto

**Covers:** S1

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Crear index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Economía Académica</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Economía Académica</h1>
        <nav>
            <ul>
                <li><a href="#materias">Materias</a></li>
                <li><a href="#recursos">Recursos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Material de estudio para alumnos de economía</h2>
            <p>Apuntes, resúmenes y esquemas organizados por materia</p>
        </section>

        <section id="materias">
            <h2>Materias</h2>
            <div class="materias-grid">
                <article class="materia-card">
                    <h3>Macroeconomía</h3>
                    <p>Conceptos fundamentales de economías a escala nacional y global.</p>
                    <a href="materias/macroeconomia.html">Ver material →</a>
                </article>
                <article class="materia-card">
                    <h3>Microeconomía</h3>
                    <p>Análisis de decisiones individuales y de empresas.</p>
                    <a href="materias/microeconomia.html">Ver material →</a>
                </article>
                <article class="materia-card">
                    <h3>Estadística</h3>
                    <p>Métodos estadísticos aplicados a la economía.</p>
                    <a href="materias/estadistica.html">Ver material →</a>
                </article>
                <article class="materia-card">
                    <h3>Matemáticas</h3>
                    <p>Herramientas matemáticas para el análisis económico.</p>
                    <a href="materias/matematicas.html">Ver material →</a>
                </article>
                <article class="materia-card">
                    <h3>Contabilidad</h3>
                    <p>Principios contables y estados financieros.</p>
                    <a href="materias/contabilidad.html">Ver material →</a>
                </article>
            </div>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía - Material para alumnos</p>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Crear css/style.css**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --bg: #f8fafc;
    --card-bg: #ffffff;
    --text: #1e293b;
    --text-muted: #64748b;
    --border: #e2e8f0;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

header {
    background: var(--primary);
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 1.5rem;
}

nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}

#hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
}

#hero h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

#materias {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

#materias h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.materias-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.materia-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: box-shadow 0.2s;
}

.materia-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.materia-card h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.materia-card p {
    color: var(--text-muted);
    margin-bottom: 1rem;
}

.materia-card a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
}

.materia-card a:hover {
    text-decoration: underline;
}

footer {
    background: var(--text);
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
        gap: 1rem;
    }
    #hero h2 {
        font-size: 1.5rem;
    }
}
```

- [ ] **Step 3: Crear js/main.js**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Economía Académica loaded');
});
```

- [ ] **Step 4: Verificar que la página carga**

Abre `index.html` en el navegador. Debe mostrarse la página con las 5 materias.

- [ ] **Step 5: Commit**

```bash
git add index.html css/ js/
git commit -m "feat: initial project structure with index page"
```

---

## Task 2: Página de Macroeconomía

**Covers:** S2

**Files:**
- Create: `materias/macroeconomia.html`

- [ ] **Step 1: Crear macroeconomia.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Macroeconomía - Economía Académica</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1><a href="../index.html" style="color:white;text-decoration:none">Economía Académica</a></h1>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="materia-header">
            <h2>Macroeconomía</h2>
            <p>Conceptos fundamentales de economías a escala nacional y global</p>
        </section>

        <section class="contenido">
            <article class="tema">
                <h3>1. Introducción a la Macroeconomía</h3>
                <ul>
                    <li>Objeto de estudio</li>
                    <li>Diferencia con microeconomía</li>
                    <li>Variables macroeconómicas principales</li>
                </ul>
            </article>

            <article class="tema">
                <h3>2. Producto Interno Bruto (PIB)</h3>
                <ul>
                    <li>Definición y medición</li>
                    <li>Métodos de cálculo</li>
                    <li>PIB real vs nominal</li>
                </ul>
            </article>

            <article class="tema">
                <h3>3. Inflación y Deflación</h3>
                <ul>
                    <li>Índices de precios</li>
                    <li>Causas y consecuencias</li>
                    <li>Política monetaria</li>
                </ul>
            </article>

            <article class="tema">
                <h3>4. Desempleo</h3>
                <ul>
                    <li>Tipos de desempleo</li>
                    <li>Tasa de desempleo自然</li>
                    <li>Curva de Phillips</li>
                </ul>
            </article>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía</p>
    </footer>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add materias/macroeconomia.html
git commit -m "feat: add macroeconomía page"
```

---

## Task 3: Páginas de otras materias

**Covers:** S2

**Files:**
- Create: `materias/microeconomia.html`
- Create: `materias/estadistica.html`
- Create: `materias/matematicas.html`
- Create: `materias/contabilidad.html`

- [ ] **Step 1: Crear microeconomia.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microeconomía - Economía Académica</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1><a href="../index.html" style="color:white;text-decoration:none">Economía Académica</a></h1>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="materia-header">
            <h2>Microeconomía</h2>
            <p>Análisis de decisiones individuales y de empresas</p>
        </section>

        <section class="contenido">
            <article class="tema">
                <h3>1. Oferta y Demanda</h3>
                <ul>
                    <li>Ley de oferta y demanda</li>
                    <li>Equilibrio de mercado</li>
                    <li>Elasticidad</li>
                </ul>
            </article>

            <article class="tema">
                <h3>2. Teoría del Consumidor</h3>
                <ul>
                    <li>Utilidad marginal</li>
                    <li>Curvas de indiferencia</li>
                    <li>Restricción presupuestaria</li>
                </ul>
            </article>

            <article class="tema">
                <h3>3. Teoría de la Empresa</h3>
                <ul>
                    <li>Costos de producción</li>
                    <li>Maximización de beneficios</li>
                    <li>Formas de mercado</li>
                </ul>
            </article>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía</p>
    </footer>
</body>
</html>
```

- [ ] **Step 2: Crear estadistica.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estadística - Economía Académica</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1><a href="../index.html" style="color:white;text-decoration:none">Economía Académica</a></h1>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="materia-header">
            <h2>Estadística</h2>
            <p>Métodos estadísticos aplicados a la economía</p>
        </section>

        <section class="contenido">
            <article class="tema">
                <h3>1. Estadística Descriptiva</h3>
                <ul>
                    <li>Medidas de tendencia central</li>
                    <li>Medidas de dispersión</li>
                    <li>Gráficos y tablas</li>
                </ul>
            </article>

            <article class="tema">
                <h3>2. Probabilidad</h3>
                <ul>
                    <li>Conceptos básicos</li>
                    <li>Distribuciones de probabilidad</li>
                    <li>Teorema central del límite</li>
                </ul>
            </article>

            <article class="tema">
                <h3>3. Inferencia Estadística</h3>
                <ul>
                    <li>Estimación por intervalos</li>
                    <li>Pruebas de hipótesis</li>
                    <li>Regresión lineal</li>
                </ul>
            </article>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía</p>
    </footer>
</body>
</html>
```

- [ ] **Step 3: Crear matematicas.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matemáticas - Economía Académica</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1><a href="../index.html" style="color:white;text-decoration:none">Economía Académica</a></h1>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="materia-header">
            <h2>Matemáticas</h2>
            <p>Herramientas matemáticas para el análisis económico</p>
        </section>

        <section class="contenido">
            <article class="tema">
                <h3>1. Cálculo</h3>
                <ul>
                    <li>Derivadas y aplicaciones</li>
                    <li>Integrales</li>
                    <li>Optimización</li>
                </ul>
            </article>

            <article class="tema">
                <h3>2. Álgebra Lineal</h3>
                <ul>
                    <li>Matrices y vectores</li>
                    <li>Sistemas de ecuaciones</li>
                    <li>Valores propios</li>
                </ul>
            </article>

            <article class="tema">
                <h3>3. Análisis Numérico</h3>
                <ul>
                    <li>Métodos de aproximación</li>
                    <li>Interpolación</li>
                </ul>
            </article>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía</p>
    </footer>
</body>
</html>
```

- [ ] **Step 4: Crear contabilidad.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contabilidad - Economía Académica</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1><a href="../index.html" style="color:white;text-decoration:none">Economía Académica</a></h1>
        <nav>
            <ul>
                <li><a href="../index.html">Inicio</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="materia-header">
            <h2>Contabilidad</h2>
            <p>Principios contables y estados financieros</p>
        </section>

        <section class="contenido">
            <article class="tema">
                <h3>1. Fundamentos</h3>
                <ul>
                    <li>Partida doble</li>
                    <li>Cuentas y clasificación</li>
                    <li>Libros contables</li>
                </ul>
            </article>

            <article class="tema">
                <h3>2. Estados Financieros</h3>
                <ul>
                    <li>Balance general</li>
                    <li>Estado de resultados</li>
                    <li>Flujo de efectivo</li>
                </ul>
            </article>

            <article class="tema">
                <h3>3. Análisis Financiero</h3>
                <ul>
                    <li>Razones financieras</li>
                    <li>Liquidez y solvencia</li>
                    <li>Rentabilidad</li>
                </ul>
            </article>
        </section>
    </main>

    <footer>
        <p>Portal académico de economía</p>
    </footer>
</body>
</html>
```

- [ ] **Step 5: Commit**

```bash
git add materias/
git commit -m "feat: add all subject pages"
```

---

## Task 4: Estilos adicionales para páginas de materias

**Covers:** S3

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Agregar estilos para páginas de materias**

```css
.materia-header {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    padding: 3rem 2rem;
    text-align: center;
}

.materia-header h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.contenido {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.tema {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
}

.tema h3 {
    color: var(--primary);
    margin-bottom: 0.75rem;
}

.tema ul {
    margin-left: 1.5rem;
    color: var(--text-muted);
}

.tema li {
    margin-bottom: 0.25rem;
}
```

- [ ] **Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: add styles for subject pages"
```

---

## Task 5: Funcionalidad de búsqueda

**Covers:** S4

**Files:**
- Modify: `index.html`
- Modify: `js/main.js`

- [ ] **Step 1: Agregar barra de búsqueda en index.html**

Agrega después del `<section id="hero">`:

```html
<section id="busqueda">
    <input type="text" id="search-input" placeholder="Buscar temas...">
    <div id="search-results"></div>
</section>
```

- [ ] **Step 2: Agregar estilos de búsqueda en css/style.css**

```css
#busqueda {
    max-width: 600px;
    margin: -1.5rem auto 2rem;
    padding: 0 2rem;
    position: relative;
}

#search-input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    font-size: 1rem;
}

#search-input:focus {
    outline: none;
    border-color: var(--primary);
}

#search-results {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-top: 0.5rem;
    display: none;
}

#search-results.active {
    display: block;
}

.search-result {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
}

.search-result:last-child {
    border-bottom: none;
}

.search-result a {
    color: var(--primary);
    text-decoration: none;
}

.search-result a:hover {
    text-decoration: underline;
}
```

- [ ] **Step 3: Agregar JavaScript de búsqueda**

```javascript
const materias = [
    { nombre: 'Macroeconomía', url: 'materias/macroeconomia.html', temas: ['PIB', 'inflación', 'desempleo', 'política monetaria'] },
    { nombre: 'Microeconomía', url: 'materias/microeconomia.html', temas: ['oferta', 'demanda', 'elasticidad', 'utilidad', 'costos'] },
    { nombre: 'Estadística', url: 'materias/estadistica.html', temas: ['probabilidad', 'regresión', 'hipótesis', 'distribuciones'] },
    { nombre: 'Matemáticas', url: 'materias/matematicas.html', temas: ['cálculo', 'derivadas', 'integrales', 'álgebra', 'matrices'] },
    { nombre: 'Contabilidad', url: 'materias/contabilidad.html', temas: ['balance', 'resultados', 'partida doble', 'estados financieros'] }
];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');

    if (input) {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query.length < 2) {
                results.classList.remove('active');
                return;
            }

            const matches = materias.filter(m =>
                m.nombre.toLowerCase().includes(query) ||
                m.temas.some(t => t.toLowerCase().includes(query))
            );

            if (matches.length > 0) {
                results.innerHTML = matches.map(m =>
                    `<div class="search-result"><a href="${m.url}">${m.nombre}</a></div>`
                ).join('');
                results.classList.add('active');
            } else {
                results.classList.remove('active');
            }
        });
    }
});
```

- [ ] **Step 4: Verificar búsqueda**

Escribe "inflación" en la barra. Debe aparecer "Macroeconomía" como resultado.

- [ ] **Step 5: Commit**

```bash
git add index.html css/style.css js/main.js
git commit -m "feat: add search functionality"
```

---

## Task 6: Deploy a GitHub Pages

**Covers:** S5

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Crear .gitignore**

```
.DS_Store
node_modules/
```

- [ ] **Step 2: Inicializar repositorio**

```bash
git init
git add .
git commit -m "feat: complete portal structure"
```

- [ ] **Step 3: Crear repositorio en GitHub y push**

```bash
git remote add origin https://github.com/USUARIO/economia-academica.git
git branch -M main
git push -u origin main
```

- [ ] **Step 4: Activar GitHub Pages**

En GitHub → Settings → Pages → Source: main branch → Save

- [ ] **Step 5: Verificar deploy**

Visita `https://USUARIO.github.io/economia-academica/`

---

## Resumen de archivos

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── materias/
│   ├── macroeconomia.html
│   ├── microeconomia.html
│   ├── estadistica.html
│   ├── matematicas.html
│   └── contabilidad.html
└── .gitignore
```
