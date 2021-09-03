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
        <img onClick={linkedinRedirect} src={LN} />
        <small>Keith J. Francis | {year}</small>
      </div>
      <div className="footer-right">
        <img src={FT} />
      </div>
    </div>
  );
}

export default Footer;