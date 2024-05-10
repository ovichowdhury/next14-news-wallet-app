'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

const CustomThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <FiSun className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
    } else {
      return <FiMoon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
    }
  }

  return <>{renderThemeChanger()}</>
}

export default CustomThemeSwitcher
