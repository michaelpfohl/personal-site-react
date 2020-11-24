import React, { Component } from 'react';

import bioPic from '../../assets/images/main/bio-pic.jpg';

class Bio extends Component {
  state = {};

  render() {
    return (
      <div class="bio--background-fade">
        <div class="bio--page" id="bio--page">
          <img class="bio--pic" src={bioPic} alt="Michael Pfohl" />
          <div class="bio--details">
            <h1 class="bio--details-header">·About Me</h1>
            <div class="bio--details-bar"></div>
            <ul class="bio--details-basic">
              <li>
              I started 2020 with a resolution to be more intentional in my life. My first step in that direction came after reading the book Atomic Habits by James Clear.
              </li>
              <li>
              I began to keep an intention journal of all of the habits I wanted to encourage. This process of incremental positive change emboldened me to make the decision to pursue web development.
              </li>
              <li>
              I began by working my way through different Udemy courses and talking with the software engineers at my job. After seeing how much I loved the work and how well suited I was for it I decided to take the leap and attend Nashville Software School beginning in July of 2020.
              </li>
              <li>
              Without a doubt, that decision has had a bigger impact on my life than any other. While learning practical skills is a wonderful thing, the thing that I am most grateful for is the total perspective shift that coding has given me.
              </li>
              <li>
              At times, it seems like magic but when you peel back the layers you see that there are systems that interlace all of this knowledge, and yet that revelation does not make the process any less magical.
              </li>
              <li>
              I am overjoyed to have finally found something that I am so passionate about and that I enjoy as much as coding. I hope that wherever I end up landing my first dev job can help me foster that feeling and push me to grow in new ways.
              </li>
            </ul>
            <h1 class="bio--details-header2">Education·</h1>
            <div class="bio--details-bar2"></div>
            <ul class="bio--details-education">
              <li>
                Belmont University · Bachelor of Business Administration -
                Entrepreneurship · 2011 - 2015
              </li>
              <li>
                Nashville Software School · Full Stack Development Bootcamp ·
                2020 - 2021
              </li>
            </ul>
            <h1 class="bio--details-header3">·Job History</h1>
            <div class="bio--details-bar"></div>
            <ul class="bio--details-job">
              <li> Lyft · Help Systems Administrator · 8/2020 - Present</li>
              <li>
                Lyft · Safety Policy & Community Compliance Specialist · 6/2019
                · 8/2020
              </li>
              <li>Lyft · Critical Response Agent · 5/2018 - 6/2019</li>
              <li>More Than Me Touring · Booking Agent · 2/2016 - 5/2018</li>
              <li>Fountainhead Booking · Concert Promoter · 9/2012 - 6/2018</li>
            </ul>
          </div>
        </div>
        <div class="tech--page" id="tech--page">
          <div class="tech--overlay">
            <h1 class="tech--header">
              <i class="fas fa-code"></i>Technologies<i class="fas fa-code"></i>
            </h1>
            <ul class="tech--list">
              <div class="tech--list-container">
                <li>React <i class="fab fa-react"></i></li>
                <li>HTML <i class="fab fa-html5"></i></li>
                <li>CSS <i class="fab fa-css3-alt"></i></li>
                <li>JavaScript <i class="fab fa-js"></i></li>
                <li>Git <i class="fab fa-git-alt"></i></li>
              </div>
              <div class="tech--list-container">
                <li>jQuery</li>
                <li>Firebase</li>
                <li>axios</li>
                <li>Bootstrap <i class="fab fa-bootstrap"></i></li>
                <li>Netlify</li>
              </div>
              <div class="tech--list-container">
                <li>Figma <i class="fab fa-figma"></i></li>
                <li>LucidChart</li>
                <li>Mockaroo</li>
                <li>npm <i class="fab fa-npm"></i></li>
              </div>
            </ul>
          </div>
        </div>
        <div class="full--page" id="projects--page"></div>
      </div>
    );
  }
}

export default Bio;
