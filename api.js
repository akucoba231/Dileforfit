const BASE_URL = 'https://dileforfit.pjokserver.my.id/public/api'; //'http://localhost:3000/api';

// --- Loading Screen Logic ---
const loadingOverlay = document.createElement('div');
loadingOverlay.id = 'globalLoadingOverlay';
loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
loadingOverlay.innerHTML = `
    <div style="transform: scale(0.7); text-align: center; display: flex; flex-direction: column; align-items: center;">
        <div style="border: 6px solid rgba(0, 0, 0, 0.1); border-left-color: #01579B; border-radius: 50%; width: 60px; height: 60px; animation: spin 1s linear infinite;"></div>
        <p style="margin-top: 20px; font-weight: bold; color: #01579B; font-size: 20px;">Memproses data...</p>
        <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
    </div>
`;

// Ensure it attaches after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(loadingOverlay));
} else {
    document.body.appendChild(loadingOverlay);
}

let activeRequests = 0;

function showLoading() {
    activeRequests++;
    loadingOverlay.style.visibility = 'visible';
    loadingOverlay.style.opacity = '1';
}

function hideLoading() {
    activeRequests--;
    if (activeRequests <= 0) {
        activeRequests = 0;
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            if (activeRequests === 0) loadingOverlay.style.visibility = 'hidden';
        }, 300);
    }
}
// ----------------------------

function handleError(prefix, errorMsg) {
    console.error(`${prefix} Error:`, errorMsg);
    if (typeof showModal === 'function') {
        showModal("Error", errorMsg);
    }
}

const api = {
    async get(table, queryParams = {}) {
        showLoading();
        const url = new URL(`${BASE_URL}/${table}`);
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
            return await response.json();
        } catch (error) {
            handleError('GET', error.message);
            return [];
        } finally {
            hideLoading();
        }
    },
    async post(table, data) {
        showLoading();
        try {
            const response = await fetch(`${BASE_URL}/${table}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json().catch(() => null);
            if (!response.ok) {
                const errMsg = (result && result.error) ? result.error : `HTTP Error ${response.status}`;
                handleError('POST', errMsg);
                return { error: errMsg };
            }
            return result;
        } catch (error) {
            handleError('POST', error.message);
            return { error: error.message };
        } finally {
            hideLoading();
        }
    },
    async put(table, id_col, id_val, data) {
        showLoading();
        try {
            const response = await fetch(`${BASE_URL}/${table}/${id_col}/${id_val}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json().catch(() => null);
            if (!response.ok) {
                const errMsg = (result && result.error) ? result.error : `HTTP Error ${response.status}`;
                handleError('PUT', errMsg);
                return { error: errMsg };
            }
            return result;
        } catch (error) {
            handleError('PUT', error.message);
            return { error: error.message };
        } finally {
            hideLoading();
        }
    },
    async delete(table, id_col, id_val) {
        showLoading();
        try {
            const response = await fetch(`${BASE_URL}/${table}/${id_col}/${id_val}`, {
                method: 'DELETE'
            });
            const result = await response.json().catch(() => null);
            if (!response.ok) {
                const errMsg = (result && result.error) ? result.error : `HTTP Error ${response.status}`;
                handleError('DELETE', errMsg);
                return { error: errMsg };
            }
            return result;
        } catch (error) {
            handleError('DELETE', error.message);
            return { error: error.message };
        } finally {
            hideLoading();
        }
    }
};
