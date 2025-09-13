import { useState, useEffect } from 'react'
import type { User, LoginCredentials, RegisterCredentials, AuthResponse } from '@/types'
import { api } from '@/services/api'

interface UseAuthReturn {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => void
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing auth token on mount
    const token = localStorage.getItem('auth_token')
    if (token) {
      // TODO: Validate token with backend
      // For now, just set a mock user
      setUser({
        id: '1',
        email: 'user@example.com',
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials)
      const { user, access_token } = response.data.data
      
      localStorage.setItem('auth_token', access_token)
      setUser({
        id: user.id.toString(),
        email: user.email,
        name: user.name,
        createdAt: new Date(user.created_at),
        updatedAt: user.updated_at ? new Date(user.updated_at) : new Date(),
      })
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setIsLoading(true)
    try {
      const response = await api.post<AuthResponse>('/auth/register', {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      })
      const { user, access_token } = response.data.data
      
      localStorage.setItem('auth_token', access_token)
      setUser({
        id: user.id.toString(),
        email: user.email,
        name: user.name,
        createdAt: new Date(user.created_at),
        updatedAt: user.updated_at ? new Date(user.updated_at) : new Date(),
      })
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = (): void => {
    localStorage.removeItem('auth_token')
    setUser(null)
  }

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  }
} 