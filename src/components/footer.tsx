import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent<{ copyrightTagline: string }> = ({
  copyrightTagline = ``,
}) => (
  <div className="footer">
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
    <div>Privacy Policy</div>
    <div className="copyright-logo">&copy; {copyrightTagline}</div>
  </div>
);

export default Footer;
