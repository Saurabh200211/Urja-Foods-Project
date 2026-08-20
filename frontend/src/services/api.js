const RAW_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_URL = RAW_URL.replace(/\/+$/, '');

/**
 * Generic API fetch wrapper supporting GET, POST, PUT, DELETE
 */
export async function apiRequest(endpoint, method = 'GET', data = null, customHeaders = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const targetUrl = `${API_URL}${cleanEndpoint}`;

  try {
    const response = await fetch(targetUrl, config);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! Status: ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error(`API Error on ${method} ${targetUrl}:`, error.message);
    throw error;
  }
}

// Dedicated API service methods
export const api = {
  // Products API
  getProducts: (category = '', search = '') => {
    let queryParams = [];
    if (category) queryParams.push(`category=${encodeURIComponent(category)}`);
    if (search) queryParams.push(`search=${encodeURIComponent(search)}`);
    const queryStr = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    return apiRequest(`/products${queryStr}`);
  },

  getProductById: (id) => apiRequest(`/products/${id}`),

  // Services API
  getServices: () => apiRequest('/services'),

  // Contact / Enquiry API
  submitEnquiry: (enquiryData) => apiRequest('/enquiries', 'POST', enquiryData),

  // Newsletter API
  subscribeNewsletter: (email) => apiRequest('/newsletter', 'POST', { email }),

  // Reports API
  getReports: () => apiRequest('/reports'),

  // Auth API
  login: (credentials) => apiRequest('/auth/login', 'POST', credentials),
  register: (userData) => apiRequest('/auth/register', 'POST', userData),
  getProfile: () => apiRequest('/auth/me'),
};

export default api;
