import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

interface SocialIconProps {
  name:
    | 'facebook'
    | 'linkedin'
    | 'twitter'
    | 'github'
    | 'youtube'
    | 'instagram';
  link: string;
}

const SocialIcon: FunctionComponent<SocialIconProps> = ({ name, link }) => (
  <div className="social-icons">
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={link}
      className="social-icon-link"
    >
      <FontAwesomeIcon icon={['fab', name]} className="social-icon" />
      {name}
    </a>
  </div>
);

export default SocialIcon;
