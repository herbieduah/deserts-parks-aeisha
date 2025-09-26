import React, { useState, useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [isLandscape, setIsLandscape] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(
        window.innerHeight < window.innerWidth && window.innerHeight < 500
      )
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

  return (
    <div
      className="app-container"
      data-orientation={isLandscape ? 'landscape' : 'portrait'}
    >
      {children}
    </div>
  )
}
