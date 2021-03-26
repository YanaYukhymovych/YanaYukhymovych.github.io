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

const Contacts = () => {
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

  return (
    <div className="contacts">
      <div className="contacts__wrapper">
        <h2 className="contacts__title"> Contacts </h2>
        <p className="contacts__text">
          Want to know more or just chat?
          <br />
          You are welcome!
        </p>

        <form className="contacts__form form">
          <input
            className="form__input form__user"
            type="text"
            name="user"
            placeholder="Name"
          />
          <div className="form__input--border" />
          <input
            className="form__input  form__email"
            type="text"
            name="email"
            placeholder="Email"
          />
          <div className="form__input--border" />
          <textarea
            className="form__input form__message"
            rows={4}
            name="message"
            placeholder="Your massage"
          />
          <div className="form__input--border" />
          <input className="form__button" type="submit" value="Send message" />
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
            Find me on social
            <br />
            Yana Yukhymovych @2021
          </p>
      </div>
    </div>
  );
};

export default Contacts;
