import React from 'react'
import Header from './Header'
import Footer from './Footer'
import type { BaseComponentProps } from '@/types'

interface MainLayoutProps extends BaseComponentProps {
  user?: {
    name: string
    email: string
  } | null
  onLogout?: () => void
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  className, 
  user, 
  onLogout 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} onLogout={onLogout} />
      <main className={className || "flex-1"}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout 