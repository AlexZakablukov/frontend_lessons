import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {ERoutePath} from "shared/config/routeConfig/routeConfig";
import {EAppLinkTheme, AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: React.FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={ERoutePath.MAIN} className={cls.mainLink}>Home</AppLink>
                <AppLink theme={EAppLinkTheme.SECONDARY} to={ERoutePath.ABOUT}>About</AppLink>
            </div>
        </div>
    );
};