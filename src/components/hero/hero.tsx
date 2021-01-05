import React, { FunctionComponent } from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"

import './hero.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const Hero: FunctionComponent<{}> = () => {
  return (
    <section className="hero section">
      <div>
        <p className="hero__text"><FormattedMessage id="hello" /></p>
      </div>
      <div>
        <h1 className="hero__title">Gaétan Nicolas.</h1>
      </div>
      <div>
        <h2 className="hero__second">
          <FormattedMessage id="subTitle" /><strong>React</strong>, <strong>React Native</strong> <FormattedMessage id="and" /> <strong>VueJs</strong>.
        </h2>
      </div>
      <div>
        <a className="hero__button" href="#contact">Contact</a>
      </div>
    </section>
  );
}

export default Hero;