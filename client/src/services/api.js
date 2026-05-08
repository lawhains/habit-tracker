const API_URL = 'http://localhost:5000/api';

export const api = {
    // Test function to check if backend is running. Makes a GET request to /api/health and returns the JSON response.
    healthCheck: async () => {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        return data;
    }
}