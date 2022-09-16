import React from "react";
import { Link } from "react-router-dom";

class AboutMe extends React.Component {

  render() {

    return (
        // <div class="aboutMe">
        <div class="backgroundImg">

<div class="section-container">
    <div class="container margintopneeded">
    <div class="aboutMeContainer">
      <div class="row">
        <div class="col-xs-12">
          <div class="section-container-spacer text-center">
            <h1 class="h2">04 : About me</h1>
          </div>
          
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-xs-12 col-md-6 ">
                  <h3>A small detail about me</h3>
                  <p>Hey I'm Natnael, Independent Solidity/Blockchain developer working as a freelance.
                    I have been in the industry for 1 year and still hoping to stick to it. </p>
                  <h3>Little more ...  </h3>
                  <p>I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. I started learning to code when I was a teenager, though it was always more of a hobby than a career focus.
I’m familiar with a variety of programming languages, including Solidity, JavaScript, HTML, CSS, React, Python, Java and C++ but I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!</p>
                  
                </div>
                <div class="col-xs-12 col-md-6 magrinbottom">
                    <div class="imageContainer">
                  <img src="./assets/images/me.jpg" class="profileImg" alt=""/>
                  <div class="middleTextOnImage">
                     <div class="textOnImage"><Link to="/Contact" style={{color: "white"}}>Contact Me</Link></div>
                  </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          
       </div>
      </div>
      </div>
    </div>
  </div>

        </div>
    );
  }
}
export default AboutMe;