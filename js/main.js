/**
 * Economía para Principiantes — JavaScript Bundle
 * Clean Architecture: Core → Services → UI → Features → Composition Root
 * Each module has a single responsibility and no circular dependencies.
 */

// ============================================================
// CORE: Data Layer (pure data, no side effects)
// ============================================================
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

// ============================================================
// SERVICES: External APIs
// ============================================================
const ApiService = {
    async fetchTipoCambio() {
        try {
            const resp = await fetch(EcoData.config.EXCHANGE_API);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            return { success: true, rate: data.rates.PEN };
        } catch (e) {
            console.warn('API tipo de cambio no disponible:', e.message);
            return { success: false, rate: 3.75 };
        }
    }
};

// ============================================================
// SERVICES: Storage abstraction
// ============================================================
const StorageService = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch {} },
    getTheme() {
        const saved = this.get(EcoData.config.THEME_KEY);
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    setTheme(theme) { this.set(EcoData.config.THEME_KEY, theme); }
};

// ============================================================
// UI: Theme (dark/light mode)
// ============================================================
const ThemeUI = {
    init() {
        const toggle = document.getElementById('theme-toggle');
        const theme = StorageService.getTheme();
        this._apply(theme, toggle);

        if (toggle) {
            toggle.addEventListener('click', () => {
                const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                this._apply(next, toggle);
                StorageService.setTheme(next);
            });
        }

        new MutationObserver(() => {
            const t = document.documentElement.getAttribute('data-theme');
            document.documentElement.setAttribute('data-bs-theme', t === 'dark' ? 'dark' : 'light');
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'dark' : 'light');
    },
    _apply(theme, btn) {
        document.documentElement.setAttribute('data-theme', theme);
        if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
};

// ============================================================
// UI: Navigation (smooth scroll)
// ============================================================
const NavUI = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') return;
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.querySelector('.navbar-collapse')?.classList.remove('show');
                }
            });
        });
    }
};

// ============================================================
// UI: Accordion (expandable sections)
// ============================================================
const AccordionUI = {
    init() {
        document.querySelectorAll('.tema').forEach(tema => {
            const header = tema.querySelector('.tema-header');
            if (!header) return;
            header.addEventListener('click', () => this._toggle(tema));
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this._toggle(tema); }
            });
        });
    },
    _toggle(tema) {
        const wasActive = tema.classList.contains('active');
        document.querySelectorAll('.tema').forEach(t => {
            t.classList.remove('active');
            const c = t.querySelector('.tema-content');
            if (c) c.style.maxHeight = null;
            t.querySelector('.tema-header')?.setAttribute('aria-expanded', 'false');
        });
        if (!wasActive) {
            tema.classList.add('active');
            const c = tema.querySelector('.tema-content');
            if (c) {
                c.style.maxHeight = c.scrollHeight + 'px';
                tema.querySelector('.tema-header')?.setAttribute('aria-expanded', 'true');
            }
        }
    }
};

// ============================================================
// UI: Animations (scroll reveal, parallax, card effects)
// ============================================================
const AnimationsUI = {
    init() {
        this._scrollReveal();
        this._parallax();
        this._cardHover();
    },
    _scrollReveal() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.materia-card, .economista-card, .tema').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            obs.observe(el);
        });

        document.querySelectorAll('.materias-grid, .economistas-grid').forEach(grid => {
            Array.from(grid.children).forEach((item, i) => { item.style.transitionDelay = `${i * 0.1}s`; });
        });
    },
    _parallax() {
        const bg = document.querySelector('.hero-bg');
        if (!bg) return;
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => { bg.style.transform = `translate3d(0,${window.pageYOffset * 0.3}px,0)`; ticking = false; });
                ticking = true;
            }
        });
    },
    _cardHover() {
        document.querySelectorAll('.materia-card, .economista-card').forEach(card => {
            // Keyboard accessibility
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'link');
            const link = card.querySelector('a');
            if (link) card.setAttribute('aria-label', link.textContent.trim() + ' - ' + (card.querySelector('p')?.textContent?.trim() || ''));

            card.addEventListener('mousemove', function(e) {
                const r = this.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) / 20;
                const y = (e.clientY - r.top - r.height / 2) / 20;
                this.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-12px)`;
            });
            card.addEventListener('mouseleave', function() { this.style.transform = ''; });
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = this.querySelector('a');
                    if (link) link.click();
                }
            });
        });
    }
};

// ============================================================
// FEATURE: Search
// ============================================================
const SearchFeature = {
    init() {
        const input = document.getElementById('search-input');
        const results = document.getElementById('search-results');
        if (!input || !results) return;

        input.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            if (q.length < EcoData.config.SEARCH_MIN_LENGTH) { results.classList.remove('active'); return; }
            const matches = EcoData.materias.filter(m =>
                m.nombre.toLowerCase().includes(q) || m.temas.some(t => t.includes(q))
            );
            if (matches.length) {
                results.innerHTML = matches.map(m => `<div class="search-result"><a href="${m.url}">${m.nombre}</a></div>`).join('');
                results.classList.add('active');
            } else { results.classList.remove('active'); }
        });

        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !results.contains(e.target)) results.classList.remove('active');
        });
    }
};

// ============================================================
// FEATURE: Extras (reading mode, filters, share, typewriter, SW)
// ============================================================
const ExtrasFeature = {
    init() {
        // Reading mode
        const rt = document.getElementById('reading-toggle');
        if (rt) rt.addEventListener('click', () => {
            document.body.classList.toggle('reading-mode');
            rt.innerHTML = document.body.classList.contains('reading-mode') ? '📖 Normal' : '📖 Leer';
        });

        // Filter buttons
        const btns = document.querySelectorAll('.btn-filtro');
        const cards = document.querySelectorAll('.profile-card');
        if (btns.length && cards.length) btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const s = btn.dataset.school;
                cards.forEach(p => { p.style.display = (s === 'todas' || p.dataset.school === s) ? 'block' : 'none'; });
            });
        });

        // Share buttons
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const data = { title: btn.dataset.title || 'Economía para Principiantes', text: btn.dataset.text || 'Mira esto', url: btn.dataset.url || location.href };
                if (navigator.share) { try { await navigator.share(data); } catch {} }
                else { await navigator.clipboard.writeText(data.url); const o = btn.textContent; btn.textContent = '✅ Copiado'; setTimeout(() => btn.textContent = o, 2000); }
            });
        });

        // Typewriter (only on home page)
        const hero = document.querySelector('.hero-content h2');
        if (hero && (location.pathname.endsWith('index.html') || location.pathname.endsWith('/'))) {
            const text = hero.textContent; hero.textContent = '';
            let i = 0; const type = () => { if (i < text.length) { hero.textContent += text[i++]; setTimeout(type, 30); } };
            type();
        }

        // Service Worker
        if ('serviceWorker' in navigator) navigator.serviceWorker.register(EcoData.config.SW_PATH).catch(() => {});
    }
};

// ============================================================
// COMPOSITION ROOT: Wire everything together
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    ThemeUI.init();
    NavUI.init();
    AccordionUI.init();
    AnimationsUI.init();
    SearchFeature.init();
    ExtrasFeature.init();
});
