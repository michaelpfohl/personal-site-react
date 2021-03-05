import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// import navBackground from '../../assets/images/main/main-background.png';

class Navbar extends Component {
  state = {};

  render() {
    return (
      <>
      <nav id="nav">
        <h1 className="name--header">
          <Link to="/">Michael·Pfohl</Link>
        </h1>
        <ul className="nav--links" id="nav--links">
          <li>
            <HashLink to="/#bio--page" className="nav--bio" id="nav--bio">
                Bio
            </HashLink>
          </li>
          <li>
            <HashLink to="/#tech--page" className="nav--technologies" id="nav--technologies">
              Technologies
            </HashLink>
          </li>
          <li>
            <Link to='/projects' className="nav--projects" id="nav--projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/music" className="nav--music" id="nav--music">
              Music
            </Link>
          </li>
        </ul>
      </nav>
      {this.props.children}
      <footer>
        <div className="footer--container">
          <a href="https://github.com/michaelpfohl" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/michael-pfohl/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://open.spotify.com/artist/7MouEGrWt0YWioUMltNdhG?si=mKQObC1kQxq0wjtXo_Qxzg" target="_blank" rel="noreferrer"><i className="fab fa-spotify"></i></a>
        </div>
        <p className="footer--copyright">©2020 Michael Pfohl</p>
      </footer>
      </>
    );
  }
}

export default Navbar;
