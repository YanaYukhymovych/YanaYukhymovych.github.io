import React, { cloneElement } from 'react';
import './About.scss';
import { Fast, IdeaIcon, TabletIcon, SpeedIcon } from '../../assets';
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Fast />,
      title: t('about.features.title.fast'),
      description: t('about.features.description.fast'),
    },
    {
      icon: <TabletIcon />,
      title: t('about.features.title.responsive'),
      description: t('about.features.description.responsive'),
    },
    {
      icon: <IdeaIcon />,
      title: t('about.features.title.intuitive'),
      description: t('about.features.description.intuitive'),
    },
    {
      icon: <SpeedIcon />,
      title: t('about.features.title.dynamic'),
      description: t('about.features.description.dynamic'),
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <h2 className="about__title">{t('about.title')}</h2>

        <p className="about__text">
          {t('about.introducing1')}
          <span className="mobile__hidden">{t('about.introducing2')}
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
          {t('about.download link')}
          <div className="link">
            {t('about.download')}
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
