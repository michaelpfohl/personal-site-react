import React, { Component } from 'react';

import musicData from '../helpers/data/musicData';
import Album from '../components/Album';

class Music extends Component {
  state = { albums: [] };

  componentDidMount() {
    this.setState({
      albums: musicData.getMusic(),
    });
  }

  render() {
    const { albums } = this.state;
    const showProjects = () => albums.map((album) => <Album album={album} />);
    return <div className="main--container">{showProjects()}</div>;
  }
}

export default Music;
