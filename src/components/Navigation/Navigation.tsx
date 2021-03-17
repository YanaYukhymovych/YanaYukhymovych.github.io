import React from 'react';
import './Navigation.scss'
import { Link } from 'react-scroll';

const Navigation = () => {
    const navLinks = ['home', 'about', 'skills', 'portfolio', 'contacts'];

    return (
        <header className="header">
            <nav className="header__navigation navigation">
                <ul className="navigation__list">
                    { navLinks.map(( item, index) => (
                        <li key={index}>
                            <Link
                              className="navigation__link"
                              to={item} smooth={true}
                              spy={true}
                              activeClass="navigation__link--active"
                              offset={-50}
                            >
                                <span className="navigation__link-text">{item}</span>
                                <span className="navigation__link-text navigation__link-text--active">{item}</span>
                            </Link>
                        </li>
                        )
                    )}
                </ul>

                {/*<div className="navigation__button navigation__button--close"></div>*/}

                <p className="navigation__language language">
                    <span>Ua |</span>
                    <span className="language language--selected">Eng</span>
                </p>
            </nav>
        </header>
    )
}

export default Navigation;