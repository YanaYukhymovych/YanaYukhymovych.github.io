import React from 'react';
import './Portfolio.scss';
import { Arrow } from '../../assets';
import Borodinskiy from '../../assets/img/borodinski.png';
import Pink from '../../assets/img/pink-white.png';
import TodoList from '../../assets/img/Todo.png';
import {useTranslation} from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const PortfolioItem = [
    {
      icon: TodoList,
      description: t('portfolio.description.todo'),
      link: 'https://yanayukhymovych.github.io/react-learning-todo/',
      stack: ['React', 'Redux', 'React Router', 'SСSS'],
    },
    {
      icon: Pink,
      description:  t('portfolio.description.pink'),
      link: 'https://yanayukhymovych.github.io/Pink',
      stack: ['JavaScript', 'HTML', 'SCSS'],
    },
    {
      icon: Borodinskiy,
      description: t('portfolio.description.borodinskiy'),
      link: 'https://yanayukhymovych.github.io/barbershop-borodinski',
      stack: ['JavaScript', 'HTML', 'SCSS'],
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">{t('portfolio.title')}</h2>
        {PortfolioItem.map((item, index) => {
          return (
            <div className="portfolio__item" key={index}>
              <a className="portfolio__link" href={item.link}>
                <img src={item.icon} alt="" />

                <Arrow
                  className="portfolio__arrow"
                  width="60px"
                  height="40px"
                />
              </a>

              <div className="portfolio__description">
                {item.description}
                <div className="portfolio__stack">
                  {item.stack.map((tech, index) => {
                    return (
                      <div className="stack__tech" key={index}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
