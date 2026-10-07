const API_BASE = '/api';

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: response.statusText };
      }
      throw new ApiError(
        errorData.message || `HTTP error ${response.status}`,
        response.status,
        errorData
      );
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error.message || 'Network error. Please check your connection.',
      0,
      null
    );
  }
}

export const api = {
  submitQuote: (data) => request('/quote', {
    method: 'POST',
    body: data,
  }),

  submitContact: (data) => request('/contact', {
    method: 'POST',
    body: data,
  }),

  getServices: () => request('/services'),
  
  getServiceAreas: () => request('/service-areas'),
};

export { ApiError };