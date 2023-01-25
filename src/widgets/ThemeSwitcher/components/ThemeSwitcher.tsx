import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ETheme, useTheme } from 'app/providers/ThemeProvider'
import { Button, EThemeButton } from 'shared/ui/Button/Button'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={EThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
        >
      {theme === ETheme.LIGHT ? <LightIcon/> : <DarkIcon />}
    </Button>
  )
}
