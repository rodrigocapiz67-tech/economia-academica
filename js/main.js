const materias = [
    { nombre: 'Macroeconomía', url: 'materias/macroeconomia.html', temas: ['PIB', 'inflación', 'desempleo', 'política monetaria', 'crecimiento'] },
    { nombre: 'Microeconomía', url: 'materias/microeconomia.html', temas: ['oferta', 'demanda', 'elasticidad', 'utilidad', 'costos', 'mercado'] },
    { nombre: 'Estadística', url: 'materias/estadistica.html', temas: ['probabilidad', 'regresión', 'hipótesis', 'distribuciones', 'muestreo'] },
    { nombre: 'Matemáticas', url: 'materias/matematicas.html', temas: ['cálculo', 'derivadas', 'integrales', 'álgebra', 'matrices', 'optimización'] },
    { nombre: 'Contabilidad', url: 'materias/contabilidad.html', temas: ['balance', 'resultados', 'partida doble', 'estados financieros', 'razones'] }
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
