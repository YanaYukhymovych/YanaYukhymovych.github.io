import React from 'react';
import './Intro.scss';
import AuthorsPhoto from '../../assets/img/AuthorsPhoto.png';
import AuthorsPhoto2x from '../../assets/img/AuthorsPhoto@2x.png';
import AuthorsPhoto3x from '../../assets/img/AuthorsPhoto@3x.png';
import { useTranslation } from 'react-i18next';



const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="intro" id="home">
      <div className="intro__wrapper">
        <h1 className="intro__title">
          {t('intro.first name')}
          <br />
          {t('intro.last name')}
          <p className="intro__description">
            {t('intro.description.position')} <br />
            {t('intro.description.location')}
            <br />
          </p>
        </h1>

        <img
          className="intro__photo"
          src={AuthorsPhoto}
          srcSet={`${AuthorsPhoto2x} 2x, ${AuthorsPhoto3x} 3x`}
          width="550px"
          height="600px"
          alt="Author"
        />
      </div>
    </section>
  );
};

export default Intro;
