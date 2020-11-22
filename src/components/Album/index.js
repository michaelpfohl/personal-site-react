import React, { Component } from 'react';

class Album extends Component {
  render() {
    const { album } = this.props;
    return (
      <div className="album--card">
      <img src={album.image} alt={album.imageAlt} className="album--image"/>
      <h1 className="album--title">{album.albumTitle}</h1>
      <h2 className="album--artist">{album.albumArtist}</h2>
        <div className="album--links">
            <a href={album.spotifyLink} target="_blank" rel="noreferrer"><i className="fab fa-spotify"></i></a>
            <a href={album.appleLink} target="_blank" rel="noreferrer"><i className="fab fa-apple"></i></a>
            <a href={album.bandcampLink} target="_blank" rel="noreferrer"><i className="fab fa-bandcamp"></i></a>
        </div>
      </div>
    );
  }
}

export default Album;
