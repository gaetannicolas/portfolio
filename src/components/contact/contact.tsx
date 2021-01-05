import React, { FunctionComponent } from 'react';
import { FormattedMessage } from "gatsby-plugin-intl"

import './contact.css';

interface ContactProps {
  copyrightTagline: string,
  socialLinks: {
    github: string;
    linkedIn: string;
    mail: string;
  };
}

const Contact: FunctionComponent<ContactProps> = ({
  copyrightTagline,
  socialLinks
}) => (
  <section id="contact" className="contact">
    <h2 className="section-title">
      <FormattedMessage id="contact.sectionTitle" />
    </h2>
    <h3 className="contact__title">
      <FormattedMessage id="contact.title" />
    </h3>
    <p className="contact__text">
      <FormattedMessage id="contact.text" />
    </p>

    <p><a className="contact__link" href={`mailto:${socialLinks.mail}?subject=Salut%20!`}>gaetan@gaetannicolas.fr</a> </p>
    <p><a className="contact__link" href={socialLinks.linkedIn} target="blank">linkedin</a> </p>
    <p><a className="contact__link" href={socialLinks.github} target="blank">github</a> </p>

    <div className="copyright">2020 &copy; {copyrightTagline}</div>
  </section>
);

export default Contact;
