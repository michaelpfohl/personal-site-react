import React, { Component } from 'react';

import KNNpic from '../assets/images/podcast/KNN-logo.jpg';
import LFTHpic from '../assets/images/podcast/LFTH_NS_LOGO.jpg';

class Podcasts extends Component {
  state = {};

  render() {
    return (
    <>
    <div class="podcast--main">
    <div class="podcast--container">
        <img class="podcast--image" src={KNNpic} alt="Kid Nation Nation"/>
        <div class="podcast--details">
            <h1 class="podcast--details-header">·Kid Nation Nation</h1>
            <div class="podcast--details-bar"></div>
            <ul class="podcast--details-basic">
                <li>Calling all pioneers - It's Kid Nation Nation!</li>
                <li>Join Michael, Tyler, Gary, and Will as they podcast through all 13 episodes of 2007's ill-fated reality disaster, Kid Nation.</li>
                <li>Will all 40 children make it out of the desert?</li>
                <li>Does Jonathan have what it takes to fend off a revolt?</li>
                <li>Watch along, listen along, and find out!</li>
                <li>Join the Discord for over the top discussions and a great community!</li>
            </ul>
            <div class="podcast--links">
                <a href="https://open.spotify.com/show/4egrQy3kYsOoeSmwXFgzJr?si=w9XICBiURqif8bljScreVA"><i class="fab fa-spotify"></i></a>
                <a href="https://podcasts.apple.com/us/podcast/kid-nation-nation/id1514628806"><i class="fas fa-podcast"></i></a>
                <a href="https://twitter.com/KidNationPod"><i class="fab fa-twitter"></i></a>
                <a href="https://discord.gg/yxgfbCy"><i class="fab fa-discord"></i></a>
            </div>
        </div>
    </div>
  </div>
  <div class="podcast--main">
    <div class="podcast--container">
        <img class="podcast--image" src={LFTHpic} alt="Live Free, Twi Hard"/>
        <div class="podcast--details">
            <h1 class="podcast--details-header">·Live Free, Twi Hard</h1>
            <div class="podcast--details-bar"></div>
            <ul class="podcast--details-basic">
                <li>Oh hey! You’re new here, right? Welcome to Live Free, Twi Hard</li>
                <li>A podcast where your overly-supportive friends, Charlie, Jameson, Gary and Michael, walk you through the entirety of the “Twilight’ saga of movies.</li>
                <li>Tune in bi-weekly to hear our hosts tackle big questions like “why does Jasper look like that?” and “which character is the girlboss of the week?”</li>
                <li>Why do they do it? Because they are sad, masochistic lions!</li>
            </ul>
            <div class="podcast--links">
                <a href="https://open.spotify.com/show/5Dk8QgIfyslgrfABZThL8T?si=JCv1ovZZRYm6P5axbLrxMw"><i class="fab fa-spotify"></i></a>
                <a href="https://podcasts.apple.com/us/podcast/live-free-twi-hard/id1533108183"><i class="fas fa-podcast"></i></a>
                <a href="https://twitter.com/TwiHardPod"><i class="fab fa-twitter"></i></a>
                <a href="https://discord.gg/yxgfbCy"><i class="fab fa-discord"></i></a>
            </div>
        </div>
    </div>
  </div>
  </>
    );
  }
}

export default Podcasts;
