import axios, { AxiosInstance, AxiosResponse } from 'axios'
import type { ApiResponse } from '@/types'

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API methods
export const api = {
  // GET request
  get: async <T>(url: string, params?: Record<string, unknown>): Promise<ApiResponse<T>> => {
    const response = await apiClient.get(url, { params })
    return response.data
  },

  // POST request
  post: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await apiClient.post(url, data)
    return response.data
  },

  // PUT request
  put: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await apiClient.put(url, data)
    return response.data
  },

  // PATCH request
  patch: async <T>(url: string, data?: unknown): Promise<ApiResponse<T>> => {
    const response = await apiClient.patch(url, data)
    return response.data
  },

  // DELETE request
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await apiClient.delete(url)
    return response.data
  },
}

export default apiClient 