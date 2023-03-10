import { useContext } from 'react'
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'

interface IUseThemeReturn {
  theme: ETheme
  toggleTheme: () => void
}

export const useTheme = (): IUseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
