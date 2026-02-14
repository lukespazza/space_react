const BASE_URL = import.meta.env.VITE_SPOCK_API_URL || 'http://localhost:8000';

export async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Spock API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
