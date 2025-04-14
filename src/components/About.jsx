import React from 'react';
import aboutMeImage from './assets/about-me.png'; // Import the image

function About() {
  return (
    <section id="about" className="portfolio-section">
      <h2>About Me</h2>
      <div className="about-me-container">
        <img src={aboutMeImage} alt="About Me" className="about-me-image" />
        <p className="about-me-text">
          Hello! My name is Bryan and I am currently on my first co-op as a Software Engineer at Barrett Distribution Centers!
          I am passionate about all facets of technology and utilizing tools to create platforms that can help benefit my community. 
          Throughout my time as a student, I’ve developed a strong understanding of algorithms, data structures, software development, and object-oriented programming.
          In my free time, I love to play basketball, hang out with friends/family, travel around the city and explore new places to eat!
        </p>
      </div>
    </section>
  );
}

export default About;
