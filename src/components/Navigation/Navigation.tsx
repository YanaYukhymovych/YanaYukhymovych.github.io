import React, { useState } from 'react';
import './Navigation.scss';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  console.log(isMenuOpen);

  const navLinks = ['home', 'about', 'skills', 'portfolio', 'contacts'];

  return (
    <header className={`header ${isMenuOpen ? 'header__menu-open' : ''}`}>
      <div
        className="header__menu-btn"
        onClick={onMenuOpen}>
      </div>

      <div className={`header__navigation navigation ${isMenuOpen ? 'navigation--open' : ''}`}>
          <div
            className="navigation__close-btn"
            onClick={onMenuClose}>
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
                  offset={-41}
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
