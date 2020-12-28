import React, { FunctionComponent, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useOnClickOutside } from '../../hooks';

// eslint-disable-next-line @typescript-eslint/ban-types
const NavBar: FunctionComponent<{}> = () => {
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
        <button onClick={toggleMenu} type="button" className="navbar__button">
          <div className={menuOpen ? "burger active" : "burger"}>
            <div className="burger__line burger__line--first"></div>
            <div className="burger__line burger__line--middle"></div>
            <div className="burger__line burger__line--last"></div>
          </div>
        </button>
        <aside className={menuOpen ? "menu active" : "menu"}>
          <nav className="menu__nav">
            <li className="menu__item">
              <a href="#about" className="menu__link">About</a>
            </li>
            <li className="menu__item">
              <a href="#projects" className="menu__link">Project</a>
            </li>
            <li className="menu__item">
              <a href="#contact" className="menu__link">Contact</a>
            </li>
            <li className="menu__item menu__item--resume">
              <a href="/src/images/cv.pdf" download className="menu__link">Resume</a>
            </li>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default NavBar;
