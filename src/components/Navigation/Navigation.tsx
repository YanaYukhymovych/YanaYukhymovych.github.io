import React, {useState, useContext, useEffect} from 'react';
import './Navigation.scss';
import { Link } from 'react-scroll';
import { MenuBtn, CloseBtn } from '../../assets';
import { SkillsContext } from '../../App';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const { handleSkillsActive } = useContext(SkillsContext);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [locale, setLocale] = useState<boolean>(false);
  

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen])

  const navLinks = {
    home: t('navigation.home'),
    about: t('navigation.about'),
    skills: t('skills.title'),
    portfolio: t('portfolio.title'),
    contacts: t('contacts.title'),
  };

  const changeLanguageUk = () => {
    i18n.changeLanguage('uk');
    setLocale(true)
    setIsMenuOpen(false);
  }

  const changeLanguageEn = () => {
    i18n.changeLanguage('en');
    setLocale(false);
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div
        className={`header__menu-btn ${
          isMenuOpen ? 'header__menu-btn--hide' : ''
        }`}
        onClick={onMenuOpen}
      >
        <MenuBtn />
      </div>

      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100vw',
          }}
          className={'header__backdrop'}
          onClick={onMenuClose}
        />
      )}

      <div
        className={`header__navigation navigation ${
          isMenuOpen ? 'navigation--open' : ''
        }`}
      >
        <div className="navigation__close-btn" onClick={onMenuClose}>
          <CloseBtn />
        </div>

        <ul className="navigation__list">
          {Object.keys(navLinks).map((key, index) => (
            <li key={index}>
              <Link
                className="navigation__link"
                to={key}
                smooth={true}
                spy={true}
                activeClass="navigation__link--active"
                onClick={onMenuClose}
                onSetActive={key === 'skills' ? handleSkillsActive : undefined}
              >
                <span className="navigation__link-text">{navLinks[key]}</span>
                <span className="navigation__link-text navigation__link-text--active">
                  {navLinks[key]}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="navigation__language language">
          <span
            onClick={changeLanguageUk}
            className={locale ? 'language--selected': ''}
          >
            Укр
          </span>

          <div className="language__divider"> </div>

          <span
            onClick={changeLanguageEn}
            className={locale ? '' : 'language--selected'}
          >
            Eng
          </span>
        </p>
      </div>
    </header>
  );
};

export default Navigation;
