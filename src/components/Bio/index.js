import React, { Component } from 'react';

import bioPic from '../../assets/images/main/bio-pic.jpeg';
import moon1 from '../../assets/images/main/moon.1.png';
import moon2 from '../../assets/images/main/moon.2.png';
import moon3 from '../../assets/images/main/moon.3.png';
import moon4 from '../../assets/images/main/moon.4.png';
import moon5 from '../../assets/images/main/moon.5.png';
import moon6 from '../../assets/images/main/moon.6.png';
import moon7 from '../../assets/images/main/moon.7.png';
import moon8 from '../../assets/images/main/moon.8.png';
import moon9 from '../../assets/images/main/moon.9.png';

class Bio extends Component {
  state = {};

  render() {
    return (
      <div className="bio--background-fade">
        <div className="bio--page" id="bio--page">
          <img className="bio--pic" src={bioPic} alt="Michael Pfohl" />
          <div className="bio--details">
            <h1 className="bio--details-header"><p className="bio--about-me-circle">·</p>About Me</h1>
            <div className="bio--details-bar"></div>
            <ul className="bio--details-basic">
              <p>Creative, efficient, and curious, I am completely enamored with the endless possibilities that development affords, and I am always looking for a new challenge. Coding gives me the opportunity to think in new ways and I am seeking a company that will harness my passion and grow my skills so that I can help solve unique and pressing problems.</p>
              <p>
              I started 2020 with a resolution to be more intentional in my life. My first step in that direction came after reading the book Atomic Habits by James Clear.  I began to keep an intention journal of all of the habits I wanted to encourage. This process of incremental positive change emboldened me to make the decision to pursue software engineering. I began by working my way through different Udemy courses and talking with the software engineers at my job at Lyft.</p>
              <p>After seeing how much I loved the work and how well suited I was for it I decided to take the leap and attend Nashville Software School beginning in July of 2020. Without a doubt, that decision has had a bigger impact on my life than any other. While learning practical skills is a wonderful thing, the thing that I am most grateful for is the total perspective shift that coding has given me.
              At times, it seems like magic but when you peel back the layers you see that there are systems that interlace all of this knowledge, and yet that revelation does not make the process any less magical.</p>
            </ul>
            <h1 className="bio--details-header2">Education<p className="bio--about-me-circle">·</p></h1>
            <div className="bio--details-bar2"></div>
            <ul className="bio--details-education">
              <li>
                Belmont University · Bachelor of Business Administration -
                Entrepreneurship · 2011 - 2015
              </li>
              <li className="bio--education-separator">· · · · · · · · · </li>
              <li>
                Nashville Software School · Full Stack Development Bootcamp ·
                2020 - 2021
              </li>
            </ul>
            <h1 className="bio--details-header3"><p className="bio--about-me-circle">·</p>Job History</h1>
            <div className="bio--details-bar"></div>
            <ul className="bio--details-job">
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
        <div className="moon--container">
          <img alt="moon1" className="forward" src={moon1}/>
          <img alt="moon3" className="reverse" src={moon3}/>
          <img alt="moon4" className="forward" src={moon4}/>
          <img alt="moon9" className="reverse" src={moon9}/>
          <img alt="moon7" className="forward" src={moon7}/>
          <img alt="moon6" className="reverse" src={moon6}/>
          <img alt="moon5" className="forward" src={moon5}/>
          <img alt="moon8" className="reverse" src={moon8}/>
          <img alt="moon2" className="forward" src={moon2}/>
        </div>
        <div className="tech--page" id="tech--page">
          <div className="tech--overlay">
            <h1 className="tech--header">
              <i className="fas fa-code"></i>Technologies<i className="fas fa-code"></i>
            </h1>
            <ul className="tech--list">
              <div className="tech--list-container">
                <li>React <i className="fab fa-react"></i></li>
                <li>HTML <i className="fab fa-html5"></i></li>
                <li>CSS <i className="fab fa-css3-alt"></i></li>
                <li>JavaScript <i className="fab fa-js"></i></li>
                <li>Git <i className="fab fa-git-alt"></i></li>
              </div>
              <div className="tech--list-container">
                <li>C#</li>
                <li>.NET Core</li>
                <li>T-SQL</li>
                <li>jQuery</li>
                <li>Firebase</li>
              </div>
              <div className="tech--list-container">
                <li>Postman</li>
                <li>P5.js</li>
                <li>axios</li>
                <li>Bootstrap</li>
                <li>Netlify</li>
              </div>
              <div className="tech--list-container">
                <li>Jinja</li>
                <li>Figma</li>
                <li>LucidChart</li>
                <li>Mockaroo</li>
                <li>npm</li>
              </div>
            </ul>
          </div>
        <div className="full--page" id="projects--page"></div>
      </div>
    </div>
    );
  }
}

export default Bio;
