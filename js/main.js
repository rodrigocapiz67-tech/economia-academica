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
    initScrollEffects();
    initParallax();
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
                    const h = t.querySelector('.tema-header');
                    if (h) h.setAttribute('aria-expanded', 'false');
                });

                if (!isActive) {
                    tema.classList.add('active');
                    const content = tema.querySelector('.tema-content');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        header.setAttribute('aria-expanded', 'true');
                    }
                }
            });

            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    header.click();
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
    const cards = document.querySelectorAll('.materia-card, .economista-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.materia-card, .economista-card, .tema').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // Stagger animation for grid items
    document.querySelectorAll('.materias-grid, .economistas-grid').forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
}

function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroBg.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing effect for hero
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect if on home page
const heroTitle = document.querySelector('.hero-content h2');
if (heroTitle && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'))) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 30);
}
