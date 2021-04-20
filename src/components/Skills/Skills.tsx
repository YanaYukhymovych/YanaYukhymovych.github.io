import React, {cloneElement, useContext} from 'react';
import './Skills.scss';
import { SkillsContext } from '../../App';
import {
  CssIcon,
  Git,
  HTML,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  ScssIcon,
} from '../../assets';
import {useTranslation} from "react-i18next";


const Skills = () => {
  const { t } = useTranslation();
  const { skillsExtended } = useContext(SkillsContext);

  const skillsProgress = [
    {
      title: 'HTML',
      progressBar: '--html',
      icon: <HTML />,
    },
    {
      title: 'CSS',
      progressBar: '--css',
      icon: <CssIcon />,
    },
    {
      title: 'SCSS',
      progressBar: '--scss',
      icon: <ScssIcon />,
    },
    {
      title: 'JavaScript',
      progressBar: '--script',
      icon: <JsIcon />,
    },
    {
      title: 'ReactJs',
      progressBar: '--react',
      icon: <ReactIcon />,
    },
    {
      title: 'Redux',
      progressBar: '--redux',
      icon: <ReduxIcon />,
    },
    {
      title: 'Git',
      progressBar: '--git',
      icon: <Git />,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills__wrapper">
        <h2 className="skills__title">{t('skills.title')}</h2>

        <div className="skills__progress progress">
          {skillsProgress.map((item, index) => {
            return (
              <div className="progress__item item" key={index}>
                {cloneElement(item.icon, {
                  width: 60,
                  height: 60,
                  className: 'item__icon',
                })}
                <div className="item__description">
                  <span className="item__title">{item.title}</span>
                  <div className="item__progress">
                    <div
                      className={
                        skillsExtended
                          ? `progress__fill progress__fill${item.progressBar}`
                          : 'progress__fill'
                      }
                    >
                      {' '}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
