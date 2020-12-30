import React, { FunctionComponent } from 'react';

import './hero.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const Hero: FunctionComponent<{}> = () => (
  <section className="hero section">
    <div>
      <p className="hero__text">Bonjour, je m&apos;appelle</p>
    </div>
    <div>
      <h1 className="hero__title">Gaétan Nicolas.</h1>
    </div>
    <div>
      <h2 className="hero__second">
        Je suis un développeur front-end, basé en France, qui travaille surtout avec <strong>React</strong>, <strong>React Native</strong> et <strong>VueJs</strong>.
      </h2>
    </div>
    <div>
      <a className="hero__button" href="#contact">Contact</a>
    </div>
  </section>
);

export default Hero;