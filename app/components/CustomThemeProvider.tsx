'use client'

import { ThemeProvider } from 'next-themes'
import React, { useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
