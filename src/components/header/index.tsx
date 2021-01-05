import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import NavBar from './navbar';
import './header.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const Index: FunctionComponent<{}> = () => (
  <header className="header">
    <div className="header-container">
      <div className="logo">
        <h1 className="logo-title">
          <Link to="/" className="logo-link" aria-label="logo">
            <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" width="116.861" height="127.3" viewBox="0 0 116.861 127.3">
              <path d="M116.314,17.886v60.4L93.527,3.692a64.266,64.266,0,0,0-16.1-3.5V83.445H62.657v8.784H73.6L59.984,119.28,16.765,64.032,71.122,0A63.82,63.82,0,0,0,58.456,1.464l-50.092,59C8.3,61.549,8.3,62.7,8.3,63.777c0,1.273.064,2.546.127,3.755L53.173,124.69a68.353,68.353,0,0,0,13.112,2.61l-.318-.382,11.584-23.041V127.3a56.6,56.6,0,0,0,8.72-1.4V9.42l30.17,98.657v1.591a62.714,62.714,0,0,0,8.72-10.439V28.324A63.432,63.432,0,0,0,116.314,17.886Z" transform="translate(-8.3)" fill="#2bd7ba"/>
            </svg>
          </Link>
        </h1>
      </div>
      <NavBar />
    </div>
  </header>
);

export default Index;
