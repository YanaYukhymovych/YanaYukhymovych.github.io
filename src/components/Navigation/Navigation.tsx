import React from 'react';
import './Navigation.scss'

const Navigation = () => {
    const navLinks = [
        { title: 'Home', link: '#home' },
        { title: 'About me', link: '#about'},
        { title: 'Skills', link: '#skills' },
        { title: 'Portfolio', link: '#portfolio' },
        { title: 'Contacts', link: '#contacts' }
    ]



    return (
        <header className="header">
            <nav className="header__navigation navigation">
                <ul className="navigation__list">
                    { navLinks.map(( item, index) => (
                        <li key={index}>
                            <a className="navigation__link" href={item.link}>
                                <span className="navigation__link--static">{item.title}</span>
                                <span className="navigation__link--active">{item.title}</span>
                            </a>
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