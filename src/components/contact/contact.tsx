import React, { FunctionComponent } from 'react';

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
  <section id="contact" className="contact section">
    <h2 className="section-title">Next ?</h2>
    <h3 className="contact__title">N&apos;hésitez pas à me contacter</h3>
    <p className="contact__text">Vous cherchez un développeur ou vous voulez simplement parler des dernières tendances technologiques ? Prenez contact avec moi.</p>

    <p><a className="contact__link" href={`mailto:${socialLinks.mail}?subject=Salut%20!`}>gaetan@gaetannicolas.fr</a> </p>
    <p><a className="contact__link" href={socialLinks.linkedIn} target="blank">linkedin</a> </p>
    <p><a className="contact__link" href={socialLinks.github} target="blank">github</a> </p>

    <div className="copyright">2020 &copy; {copyrightTagline}</div>
  </section>
);

export default Contact;
