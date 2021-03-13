import React from 'react';
import './Skills.scss'

const Skills = () => {
    return (

      <section className="skills" id="skills">
          <div className="skills__wrapper">
              <h2 className="skills__title">Skills</h2>

              <div className="skills__progress progress">
                  <div className="progress__bar">
                      <div className="progress__fill progress__fill--html">
                          <span className="progress__technologies">HTML</span>
                      </div>
                  </div>

                  <div className="progress__bar">
                      <div className="progress__fill progress__fill--css">
                          <span className="progress__technologies">CSS/Scss/Less</span>
                      </div>
                  </div>

                  <div className="progress__bar">
                      <div className="progress__fill progress__fill--script">
                          <span className="progress__technologies">JavaScript</span>
                      </div>
                  </div>

                  <div className="progress__bar">
                      <div className="progress__fill progress__fill--git">
                          <span className="progress__technologies">GIT</span>
                      </div>
                  </div>
              </div>

              <div className="skills__programs programs">
                  <div className="programs__item">
                      <img
                        className="programs__logo"
                        src="./img/webstorm.png"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <p className="programs__title">WebStorm</p>
                  </div>

                  <div className="programs__item">
                      <img
                        className="programs__logo"
                        src="./svg/github.svg"
                        width="60px"
                        height="60px"
                        alt=""
                      />
                      <p className="programs__title">Github</p>
                  </div>

                  <div className="programs__item programs__item--gulp">
                      <img
                        className="programs__logo"
                        src="./img/gulp.png"
                        width="35px"
                        height="70px"
                        alt=""
                      />
                      <p className="programs__title">Gulp</p>
                  </div>

                  <div className="programs__item">
                      <img
                        className="programs__logo"
                        src="./svg/zeplin.svg"
                        width="80px"
                        height="60px"
                        alt=""
                      />
                      <p className="programs__title">Zepplin</p>
                  </div>

                  <div className="programs__item">
                      <img
                        className="programs__logo"
                        src="./img/figma.png"
                        width="80px"
                        height="60px"
                        alt=""
                      />
                      <p className="programs__title">Figma</p>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Skills;