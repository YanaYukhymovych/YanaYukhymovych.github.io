import React, { cloneElement } from 'react';
import './About.scss';
import { Fast, IdeaIcon, TabletIcon, SpeedIcon } from '../../assets';

const About = () => {
  const features = [
    {
      icon: <Fast />,
      title: 'Fast',
      description:
        'Fast load times and lag free interaction, my highest priority.',
    },
    {
      icon: <TabletIcon />,
      title: 'Responsive',
      description: 'My layouts will work on any device, big or small.',
    },
    {
      icon: <IdeaIcon />,
      title: 'Intuitive',
      description: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      icon: <SpeedIcon />,
      title: 'Dynamic',
      description: "Websites don't have to be static, I love making pages come to life.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h2 className="about__title">Who am I?</h2>

        <p className="about__text">
          Hi, I'm Yana - Front-End Developer from Kyiv, Ukraine.
          <span className="mobile__hidden">
            &nbsp;I have serious passion for UI design and creating intuitive,
            dynamic user experiences.
          </span>
        </p>

        <div className="about__features features">
          {features.map((item, index) => {
            return (
              <div className="features__item" key={index}>
                {cloneElement(item.icon, {
                  className: 'features__img',
                  width: 40,
                  height: 40,
                })}

                <span className="features__title">{item.title}</span>

                <p className="features__text">{item.description}</p>
              </div>
            );
          })}
        </div>

        <a className="about__link" href="Yukhymovych Yana CV.pdf" download>
          Let's make something special
          <div className="link">
            download CV
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
