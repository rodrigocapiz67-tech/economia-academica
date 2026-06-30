/**
 * Services: API Layer
 * External API calls and data fetching.
 * Pure async functions — no DOM manipulation.
 */
const ApiService = {
    async fetchTipoCambio() {
        try {
            const resp = await fetch(EcoData.config.EXCHANGE_API);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            return { success: true, rate: data.rates.PEN };
        } catch (error) {
            console.warn('API tipo de cambio no disponible:', error.message);
            return { success: false, rate: 3.75 };
        }
    },

    async fetchBCRPData() {
        try {
            const resp = await fetch('https://estadisticas.bcrp.gob.pe/estadisticas/Principal/api/es/json/01/010210', {
                headers: { 'Accept': 'application/json' }
            });
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            return { success: true, data };
        } catch (error) {
            console.warn('API BCRP no disponible:', error.message);
            return { success: false, data: null };
        }
    }
};
