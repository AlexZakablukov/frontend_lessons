import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

import cls from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
