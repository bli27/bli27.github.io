import { useState, useEffect } from 'react';
import './App.css';

import aboutMeImage from './assets/about-me.png';
import celtics from './assets/celtics.png';
import foods from './assets/foods.png';
import views from './assets/views.png';
import friends from './assets/friends.png';
import friends2 from './assets/friends2.png';
import friends3 from './assets/friends3.png';
import friends4 from './assets/friends4.png';
import ny from './assets/ny.png';
import minesweeper from './assets/minesweeper.png';
import Header from './Header';

function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [elements, options]);

  return [setElements, entries];
}

function App() {
  const [setElements, entries] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    // Add fade-in class to visible sections
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, [entries]);

  useEffect(() => {
    // Get all sections for animation
    const sections = document.querySelectorAll('.animate-on-scroll');
    setElements(sections);
  }, [setElements]);

  return (
    <>
      {/* Navigation Tabs */}
      <nav className="portfolio-nav">
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <Header />

      {/* About Section */}
      <section id="about" className="portfolio-section animate-on-scroll">
        <h2>About Me</h2>
        <div className="about-me-container">
          <img
            src={aboutMeImage}
            alt="About Me"
            className="about-me-image"
          />
          <p className="about-me-text">
            This past summer, I was Software Engineer Co-op at a small third-party logistics company called Barrett 
            Distribution Centers where I worked on a modern inventory management portal to handle order managements,
            build order tagging, role-based access controls, and API integrations on AWS. 
            I love learning new things, especially using technology to create impactful solutions that benefit my community. Throughout my academic
            journey, I've developed strong foundations in:
            <br /><br />
            • Algorithms & Data Structures<br />
            • Software Development<br />
            • Object-Oriented Programming<br />
            • Full-Stack Web Development<br />
            <br />
            In my free time, I love to play basketball, exploring new restaurants, and hanging out 
            with friends and family around the city!
          </p>
        </div>
        
        {/* Collage Section */}
        <div className="collage-container">
          <img src={celtics} alt="Celtics Game" className="collage-image" title="Celtics in 7!" />
          <img src={foods} alt="Food Adventures" className="collage-image" title="I love food" />
          <img src={views} alt="City Views" className="collage-image" title="Boston Common" />
          <img src={friends} alt="Friends" className="collage-image" title="Celtics with friends" />
          <img src={friends2} alt="More Friends" className="collage-image" title="Birthday dinner!" />
          <img src={friends3} alt="More Friends" className="collage-image" title="My birthday suprise! 🥹" />
          <img src={friends4} alt="More Friends" className="collage-image" title="Prom!" />
          <img src={ny} alt="New York" className="collage-image" title="NYC!" />


        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="portfolio-section animate-on-scroll">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              A modern, responsive portfolio website built with React and Vite featuring smooth animations, showcasing my past experiences and 
              projects.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>
            <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Critiqify</h3>
            <p>
              A video presentation platform that helps users practice interviews through recording, analysis, and feedback features using modern web technologies.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Supabase</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>TypeScript</span>
            </div>
            <a href="https://critiqify.netlify.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Minesweeper</h3>
            <p>
              A classic Minesweeper game with customizable difficulty levels, safety flags, and an intuitive interface for engaging grid-based gameplay.
            </p>
            <div className="tech-stack">
              <span>Java</span>
            </div>
            <a href={minesweeper} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="portfolio-section animate-on-scroll">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <h3>Software Engineer Co-op</h3>
            <p>Barrett Distribution Centers (January 2025 - August 2025)</p>
            <ul>
              <li>
              Launched a modern portal to manage $500M of inventory for  20+ companies and vendors, developing order tagging and filtering features to streamline order management and operation
              </li>
              <li>
                Built role-based access controls by managing user permissions to display editable fields based on CRUD permissions within the orders management 

              </li>
              <li>
                Integrated with RESTful APIs hosted on AWS infrastructure, handling complex order update workflows across multiple services 
              </li>
              <li>
              Collaborated in an Agile environment, actively participating in weekly standups and backlog refinement meetings to discuss priorities, track progress, and deliver improvements.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Software Developer</h3>
            <p>Oasis (January 2024 - April 2024)</p>
            <ul>
              <li>
                Developed full-stack video presentation platform using React and modern web technologies
              </li>
              <li>
                Integrated complex APIs for video/audio recording with robust permission handling
              </li>
              <li>
                Implemented data persistence using Supabase for storing video data and user feedback
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Freelance Developer</h3>
            <p>EM Wireless (June 2021 - January 2022)</p>
            <ul>
              <li>
                Designed and developed responsive website for store information and customer engagement
              </li>
              <li>
                Performed technical diagnostics and repairs on mobile devices
              </li>
              <li>
                Conducted detailed circuit analysis and battery health assessments
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section portfolio-contact animate-on-scroll">
        <h2>Let's Connect!</h2>
        <p>Feel free to reach out here!</p>
        
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/bryanli27/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect on LinkedIn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
            />
          </a>

          <a 
            href="mailto:li.brya@northeastern.edu"
            title="Send me an email"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
            />
          </a>

          <a
            href="https://www.instagram.com/bryanli123/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow on Instagram"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
