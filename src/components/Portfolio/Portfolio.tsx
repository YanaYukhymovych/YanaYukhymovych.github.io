import React from 'react';
import './Portfolio.scss';
import { Arrow } from '../../assets';
import Borodinskiy from '../../assets/img/borodinski.png';
import Pink from '../../assets/img/pink.jpg';
import TodoList from '../../assets/img/TodoList.png';

const Portfolio = () => {
  const PortfolioItem = [
    {
      icon: Borodinskiy,
      description: 'Making a layout of multi-pages online-shop. Implementing sign up form with JS',
      link: 'https://yanayukhymovych.github.io/barbershop-borodinski',
    },
    {
      icon: Pink,
      description: 'Creating website for photo processing application. Making cross-platforms layout using Scss, implementing JS-slider',
      link: 'https://yanayukhymovych.github.io/Pink',
    },
    {
      icon: TodoList,
      description:
        'Web application for creating and organised a tasks that you want to do. Made with ReactJS',
      link: 'https://yanayukhymovych.github.io/react-learning-todo/',
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Portfolio</h2>
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

              <p className="portfolio__description">{item.description}</p>
            </div>
          )
        })}

      </div>
    </section>
  );
};

export default Portfolio;
