import React, { Component } from 'react';

import bioPic from '../../assets/images/main/bio-pic.jpg';

class Bio extends Component {
  state = {};

  render() {
    return (
      <>
        <div class="bio--page" id="bio--page">
          <img class="bio--pic" src={bioPic} alt="Michael Pfohl" />
          <div class="bio--details">
            <h1 class="bio--details-header">·About Me</h1>
            <div class="bio--details-bar"></div>
            <ul class="bio--details-basic">
              <li>
                I am a student in Nashville Software School's Evening 13 Cohort
                seeking my first developer job.
              </li>
              <li>
                I have a passion for UX/UI Design and I often find myself
                spending hours tooling around with CSS.
              </li>
              <li>
                Sapien faucibus et molestie ac feugiat sed lectus. Interdum
                varius sit amet mattis vulputate.
              </li>
              <li>Lectus sit amet est placerat in egestas erat imperdiet.</li>
              <li>
                Nec sagittis aliquam malesuada bibendum arcu vitae elementum.
                Tortor dignissim convallis aenean et.
              </li>
              <li>
                Sit amet volutpat consequat mauris nunc. Vitae ultricies leo
                integer malesuada nunc vel.
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
              <li>
                Lyft · Safety Policy & Community Compliance Specialist · 6/2019
                - Present
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
              <li>
                HTML <i class="fab fa-html5"></i>
              </li>
              <li>
                CSS <i class="fab fa-css3-alt"></i>
              </li>
              <li>
                JavaScript <i class="fab fa-js"></i>
              </li>
              <li>
                Git <i class="fab fa-git-alt"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="full--page" id="projects--page"></div>
      </>
    );
  }
}

export default Bio;
