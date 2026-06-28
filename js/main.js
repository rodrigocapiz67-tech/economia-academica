const materias = [
    { nombre: 'Macroeconomía', url: 'materias/macroeconomia.html', temas: ['PIB', 'inflación', 'desempleo', 'política monetaria', 'crecimiento'] },
    { nombre: 'Microeconomía', url: 'materias/microeconomia.html', temas: ['oferta', 'demanda', 'elasticidad', 'utilidad', 'costos', 'mercado'] },
    { nombre: 'Estadística', url: 'materias/estadistica.html', temas: ['probabilidad', 'regresión', 'hipótesis', 'distribuciones', 'muestreo'] },
    { nombre: 'Matemáticas', url: 'materias/matematicas.html', temas: ['cálculo', 'derivadas', 'integrales', 'álgebra', 'matrices', 'optimización'] },
    { nombre: 'Economía Política', url: 'materias/economia-politica.html', temas: ['capitalismo', 'socialismo', 'mercado', 'regulación', 'desarrollo', 'globalización'] }
];

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initAccordion();
    initDarkMode();
    initCardEffects();
});

function initSearch() {
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

        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !results.contains(e.target)) {
                results.classList.remove('active');
            }
        });
    }
}

function initAccordion() {
    const temas = document.querySelectorAll('.tema');

    temas.forEach(tema => {
        const header = tema.querySelector('.tema-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = tema.classList.contains('active');

                document.querySelectorAll('.tema').forEach(t => {
                    t.classList.remove('active');
                    const content = t.querySelector('.tema-content');
                    if (content) content.style.maxHeight = null;
                });

                if (!isActive) {
                    tema.classList.add('active');
                    const content = tema.querySelector('.tema-content');
                    if (content) content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });
}

function initDarkMode() {
    const toggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (toggle) toggle.textContent = '☀️';
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            toggle.textContent = next === 'dark' ? '☀️' : '🌙';
        });
    }
}

function initCardEffects() {
    const cards = document.querySelectorAll('.materia-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}
