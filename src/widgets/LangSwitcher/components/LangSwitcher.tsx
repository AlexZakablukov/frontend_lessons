import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import cls from './LangSwitcher.module.scss';
import {Button, EThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({className}) => {
    const {i18n, t} = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={EThemeButton.CLEAR}
            onClick={toggleLang}
        >
            {t('language')}
        </Button>
    );
};