import React, { useState, useContext } from 'react';
import './Navigation.scss';
import { Link } from 'react-scroll';
import { MenuBtn, CloseBtn } from '../../assets';
import { SkillsContext } from '../../App';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { handleSkillsActive } = useContext(SkillsContext);


  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  const navLinks = ['home', 'about', 'skills', 'portfolio', 'contacts'];

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
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="navigation__link"
                to={item}
                smooth={true}
                spy={true}
                activeClass="navigation__link--active"
                onClick={onMenuClose}
                onSetActive={item === 'skills' ? handleSkillsActive : undefined}
              >
                <span className="navigation__link-text">{item}</span>
                <span className="navigation__link-text navigation__link-text--active">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="navigation__language language">
          <span>Ua |</span>
          <span className="language language--selected">Eng</span>
        </p>
      </div>
    </header>
  );
};

export default Navigation;
