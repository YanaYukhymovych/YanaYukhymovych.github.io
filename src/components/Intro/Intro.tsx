import React from 'react';
import './Intro.scss'
import AuthorsPhoto from '../../assets/img/AuthorsPhoto.png'
import AuthorsPhoto2x from '../../assets/img/AuthorsPhoto@2x.png'
import AuthorsPhoto3x from '../../assets/img/AuthorsPhoto@3x.png'


const Intro = () => {
    return (
      <section className="intro" id="home">
        <div className="intro__wrapper">
          <h1 className="intro__title">
            Yana<br/>
            Yukhymovych
          </h1>

          <p className="intro__description">
            Front-end developer<br/>
            Kyiv, Ukraine<br/>
          </p>

          <p className="intro__photo">
            <img
              src={AuthorsPhoto}
              srcSet={`${AuthorsPhoto2x} 2x, ${AuthorsPhoto3x} 3x`}
              width="550px"
              height="600px"
              alt="Author's photo"
            />
          </p>
        </div>
      </section>
    )
}

export default Intro;