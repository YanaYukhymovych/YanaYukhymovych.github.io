import React, { cloneElement } from 'react';
import './Contacts.scss';
import {
  Telegram,
  TelegramFill,
  FacebookFill,
  Facebook,
  InstagramFill,
  Instagram,
  LinkedinFill,
  Linkedin,
} from '../../assets';
import {useTranslation} from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  const socials = [
    {
      link: 'https://t.me/y_yukhymovych',
      icon: <Telegram />,
      iconFilled: <TelegramFill />,
    },
    {
      link: 'https://www.facebook.com/yana.yukhymovych',
      icon: <Facebook />,
      iconFilled: <FacebookFill />,
    },
    {
      link: 'https://www.instagram.com/y_yukhymovych',
      icon: <Instagram />,
      iconFilled: <InstagramFill />,
    },
    {
      link: 'https://linkedin.com/in/яна-юхимович-207302152',
      icon: <Linkedin />,
      iconFilled: <LinkedinFill />,
    },
  ];

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <h2 className="contacts__title"> {t('contacts.title')} </h2>
        <p className="contacts__text">
          {t('contacts.description.1')}
          <br />
          {t('contacts.description.2')}
        </p>

        <form
          className="contacts__form form"
          action="https://formspree.io/f/xayawkvp"
          method="POST"
        >
          <input
            className="form__input form__user"
            type="text"
            name="user"
            placeholder={t('contacts.placeholder.name')}
          />
          <div className="form__input--border" />
          <input
            className="form__input  form__email"
            type="text"
            name="email"
            placeholder={t('contacts.placeholder.email')}
          />
          <div className="form__input--border" />
          <textarea
            className="form__input form__message"
            rows={4}
            name="message"
            placeholder={t('contacts.placeholder.message')}
          />
          <div className="form__input--border" />
          <input className="form__button" type="submit" value={t('contacts.button').toString()} />
        </form>

        <div className="contacts__social social">
          {socials.map((item, index) => (
            <a className="social__link" href={item.link} key={index}>
              {cloneElement(item.icon, {
                width: 40,
                height: 40,
                className: 'svg__empty',
              })}
              {cloneElement(item.iconFilled, {
                width: 40,
                height: 40,
                className: 'svg__fill',
              })}
            </a>
          ))}
        </div>

        <p className="contacts__notes">
          {t('contacts.notes.1')}
          <br />
          {t('contacts.notes.2')}
        </p>
      </div>
    </div>
  );
};

export default Contacts;
