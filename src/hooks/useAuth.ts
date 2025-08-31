import { useState, useEffect } from 'react'
import type { User, LoginCredentials, RegisterCredentials } from '@/types'

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
      // TODO: Implement actual login API call
      console.log('Logging in with:', credentials)
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      localStorage.setItem('auth_token', 'mock-token')
      setUser(mockUser)
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
      // TODO: Implement actual registration API call
      console.log('Registering with:', credentials)
      
      // Mock successful registration
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: credentials.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      localStorage.setItem('auth_token', 'mock-token')
      setUser(mockUser)
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