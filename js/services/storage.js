/**
 * Services: Storage Layer
 * Abstraction over localStorage for theme persistence.
 */
const StorageService = {
    get(key) {
        try { return localStorage.getItem(key); } catch { return null; }
    },

    set(key, value) {
        try { localStorage.setItem(key, value); } catch {}
    },

    getTheme() {
        const saved = this.get(EcoData.config.THEME_KEY);
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    setTheme(theme) {
        this.set(EcoData.config.THEME_KEY, theme);
    }
};
