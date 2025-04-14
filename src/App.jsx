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
import Header from './Header';

// Intersection Observer for fade-in animations
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
            I am a passionate Software Engineer currently on my first co-op at Barrett Distribution Centers.
            I love learning new things especially leveraging technology to create impactful solutions that benefit those around me. Through my academic
            journey, I've developed strong foundations in:
            <br /><br />
            • Algorithms & Data Structures<br />
            • Software Development<br />
            • Object-Oriented Programming<br />
            • Full-Stack Web Development<br />
            <br />
            When I'm not coding, you'll find me on the basketball court, exploring new restaurants, or creating memories
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
        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            A modern, responsive portfolio website built with React and Vite. Features smooth animations,
            responsive design, and optimized performance. Implements best practices in web development
            and modern UI/UX principles.
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>CSS3</span>
          </div>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>Critiqify</h3>
          <p>
            Developed a video presentation platform for recording and analyzing video presentations while also helping users prepare for interviews.
            Implemented features for self-critique and feedback, utilizing modern web technologies
            and API integrations.
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
          <h3>E-Commerce Website</h3>
          <p>
            Built a responsive e-commerce platform with modern features including product filtering,
            shopping cart functionality, and secure payment integration.
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="portfolio-section animate-on-scroll">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <h3>Software Engineer Co-op</h3>
            <p>Barrett Distribution Centers (January 2024 - Present)</p>
            <ul>
              <li>
                Developing scalable logistics solutions using modern software engineering practices
              </li>
              <li>
                Implementing automation systems to improve operational efficiency
              </li>
              <li>
                Collaborating with cross-functional teams to deliver high-quality software solutions
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
        <p>I'm always open to new opportunities and collaborations</p>
        
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
