import React, { FunctionComponent, useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from "gatsby-plugin-intl"
import { useOnClickOutside } from "../../hooks";
import Language from "./language"


// eslint-disable-next-line @typescript-eslint/ban-types
const NavBar: FunctionComponent<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      file(extension: {eq: "pdf"}, name: {eq: "cv_gaetannicolas"}) {
        publicURL
      }
    }
  `);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <div className="navbar">
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <div ref={wrapperRef} >
        <button onClick={toggleMenu} type="button" className="navbar__button" aria-label="burger-button">
          <div className={menuOpen ? "burger active" : "burger"}>
            <div className="burger__line burger__line--first"></div>
            <div className="burger__line burger__line--middle"></div>
            <div className="burger__line burger__line--last"></div>
          </div>
        </button>
        <aside className={menuOpen ? "menu active" : "menu"}>
          <Language styleClass="language" />
          <nav className="menu__nav">
            <li className="menu__item">
              <a href="#about" className="menu__link"><FormattedMessage id="menu.about" /></a>
            </li>
            <li className="menu__item">
              <a href="#projects" className="menu__link"><FormattedMessage id="menu.projects" /></a>
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link"><FormattedMessage id="menu.contact" /></a>
            </li>
            <li className="menu__item menu__item--resume">
              <a href={data.file.publicURL} target="blank" download className="menu__link"><FormattedMessage id="menu.resume" /></a>
            </li>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default NavBar;
