import React, { Component } from 'react';
import navBackground from '../../assets/images/main/main-background.png';

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav style={{ background: navBackground }}>
        <h1 class="name--header">
          <a href="index.html">Michael·Pfohl</a>
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
            <a href="#" class="nav--projects" id="nav--projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="nav--music" id="nav--music">
              Music
            </a>
          </li>
          <li>
            <a href="#" class="nav--podcast" id="nav--podcast">
              Podcast
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
