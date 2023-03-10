import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, LinkProps } from 'react-router-dom'

import cls from './AppLink.module.scss'

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: EAppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = EAppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
        >
      {children}
    </Link>
  )
}
