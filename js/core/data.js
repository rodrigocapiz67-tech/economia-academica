/**
 * Core: Data Layer
 * All content data, models, and site configuration.
 * Pure data — no DOM, no side effects.
 */
const EcoData = {
    materias: [
        { nombre: 'Macroeconomía', url: 'materias/macroeconomia.html', temas: ['PIB', 'inflación', 'desempleo', 'política monetaria', 'crecimiento'] },
        { nombre: 'Microeconomía', url: 'materias/microeconomia.html', temas: ['oferta', 'demanda', 'elasticidad', 'utilidad', 'costos', 'mercado'] },
        { nombre: 'Estadística', url: 'materias/estadistica.html', temas: ['probabilidad', 'regresión', 'hipótesis', 'distribuciones', 'muestreo'] },
        { nombre: 'Matemáticas', url: 'materias/matematicas.html', temas: ['cálculo', 'derivadas', 'integrales', 'álgebra', 'matrices', 'optimización'] },
        { nombre: 'Economía Política', url: 'materias/economia-politica.html', temas: ['capitalismo', 'socialismo', 'mercado', 'regulación', 'desarrollo', 'globalización'] }
    ],

    config: {
        EXCHANGE_API: 'https://open.er-api.com/v6/latest/USD',
        THEME_KEY: 'economia-theme',
        SW_PATH: './sw.js',
        SEARCH_MIN_LENGTH: 2
    }
};
