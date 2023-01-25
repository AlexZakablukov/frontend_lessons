import { FC, ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum EThemeButton {
  CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
        >
      {children}
    </button>
  )
}
