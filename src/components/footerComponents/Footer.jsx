import React from 'react';
import LN from '../../images/linkedin-icon.png';
import FT from '../../images/footer-tags.png';

let year = new Date().getFullYear();

function Footer() {
  function linkedinRedirect() {
    window.open('https://www.linkedin.com/in/keith-francis-034991a4/', '_blank')
  }

  return(
    <div className="footer-div">
      <div className="footer-left">
        <img onClick={linkedinRedirect} src={LN} alt="LinkedIn Icon" />
        <small>Keith J. Francis | {year}</small>
        <br />
        <small>This site made with React.js</small>
      </div>
      <div className="footer-right">
        <img src={FT} alt="Site tags" />
      </div>
    </div>
  );
}

export default Footer;