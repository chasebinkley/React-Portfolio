import React from "react";

function About() {
  return (
    <section id="aboutMe" className="my-5 intro">
      <p class="me1">Hi there! My name is Chase Binkley.</p>

      <div class=" flex-row wrapper">
        <div class="intro-img">
          <img id="profPic" src="./public/20221212_134001.jpg" alt="prof-pic" />
          <p class="me">
          Hello there, my name is Chase Binkley and I am a web developer. I currently reside in Honolulu, Hawaii where I enjoy exploring the beautiful natural landscapes as much as discovering the hidden gems of the city life as well.
       Having just graduated from Berkley's full stack development bootcamp, I am excited to put the skills I've learned to good use creating and expanding upon the many wonderful projects to come.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;