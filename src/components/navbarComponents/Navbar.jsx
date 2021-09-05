import React from 'react';
// <a className="nav-link" href="#portfolio">PORTFOLIO</a>
function Navbar() {
  return (
    <div className="navbar-container stick-top">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-title" href="#home">Keith Francis</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#about">ABOUT</a>
              <a className="nav-link" href="#contact">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;