import React, { FunctionComponent } from 'react';

import './about.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const About: FunctionComponent<{}> = () => (
  <section id="about" className="about section">
    <h2 className="section-title about__title">About me</h2>
    <div className="about__wrapper">
      <div>
        <p>
          Ex culpa deserunt sunt laborum mollit veniam sint reprehenderit reprehenderit.
          Occaecat dolor consectetur sunt tempor officia minim magna aliqua eu quis.
        </p>
        <p>
          Elit elit ullamco veniam elit reprehenderit. 
          Ut quis id ad veniam pariatur est aute dolor amet est esse consectetur fugiat voluptate.
          Anim ea aliqua exercitation reprehenderit consectetur voluptate voluptate. Ut Lorem ut nostrud ad.
          Tempor labore esse aliquip magna excepteur occaecat proident fugiat duis consectetur sunt officia eiusmod.
        </p>
      </div>
      <div>
        <div className="about__image-wrapper">
          <img className="image about__image" src="me.jpg" alt="me" /> 
        </div>
      </div>
    </div>
    
  </section>
);

export default About;