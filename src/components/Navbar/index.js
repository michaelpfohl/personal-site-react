import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import navBackground from '../../assets/images/main/main-background.png';

class Navbar extends Component {
  state = {};

  render() {
    return (
      <>
      <nav id="nav">
        <h1 class="name--header">
          <Link to="/">Michael·Pfohl</Link>
        </h1>
        <ul class="nav--links" id="nav--links">
          <li>
            <a href="#bio--page" class="nav--bio" id="nav--bio">
              Bio
            </a>
          </li>
          <li>
            <a
              href="#tech--page"
              class="nav--technologies"
              id="nav--technologies"
            >
              Technologies
            </a>
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
          {/* <li>
            <Link to="/podcasts" className="nav--podcast" id="nav--podcast">
              Podcasts
            </Link>
          </li> */}
        </ul>
      </nav>
      {this.props.children}
      <footer>
        <div class="footer--container">
          <a href="https://github.com/michaelpfohl" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/michael-pfohl/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
          {/* <a href="https://twitter.com/YachtRockBoy" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a> */}
          <a href="https://open.spotify.com/artist/7MouEGrWt0YWioUMltNdhG?si=mKQObC1kQxq0wjtXo_Qxzg" target="_blank" rel="noreferrer"><i class="fab fa-spotify"></i></a>
        </div>
        <p class="footer--copyright">©2020 Michael Pfohl</p>
      </footer>
      </>
    );
  }
}

export default Navbar;
