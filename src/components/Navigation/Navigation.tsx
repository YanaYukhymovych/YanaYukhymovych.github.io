import React, { useState } from 'react';
import './Navigation.scss';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  }

  const onMenuClose = () => {
    setIsMenuOpen(false);
  }

  console.log(isMenuOpen);

  const navLinks = ['home', 'about', 'skills', 'portfolio', 'contacts'];

  return (
    // <header className="header header--open">
    // <header className={['header', isMenuOpen ? 'header--open' : ''].join(' ')}>
    // <header className={`header ${isMenuOpen ? 'header--open' : ''}`}>
      <header className="header">

      <nav className="header__navigation navigation">
        <div className="navigation__button navigation__button--open"  onClick={onMenuOpen}> </div>

        <div className="navigation__button navigation__button--close" onClick={onMenuClose}> </div>

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
      </nav>
    </header>
  );
};

export default Navigation;
