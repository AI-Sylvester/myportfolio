import React, { useState, useEffect } from "react";
import "./App.css";
import righthome from './righthome.png';
import abouts from './about.png';
import logo from './ais.png';

function App() {
  // Data for sections
  const aboutMeText = "I am a passionate web developer with expertise in creating modern, responsive, and user-friendly websites. With a strong foundation in front-end and back-end development, I strive to build applications that make a difference.";

  const educationList = [
    { degree: "Master's Degree", field: "Computer Application", school: "Govt Arts College, Coimbatore", duration: "2011 - 2014" },
    { degree: "Bachelor's Degree", field: "Computer Application", school: "Govt Arts College, Coimbatore", duration: "2008 - 2011" },
    { degree: "High School", field: "Science & Mathematics", school: "St. Michaels Higher Secondary School", duration: "2006 - 2008" }
  ];

  const skillsList = [
    { skill: "HTML5", icon: "fab fa-html5", level: "Advanced" },
    { skill: "CSS3", icon: "fab fa-css3-alt", level: "Advanced" },
    { skill: "JavaScript", icon: "fab fa-js", level: "Advanced" },
    { skill: "React", icon: "fab fa-react", level: "Advanced" },
    { skill: "Node.js", icon: "fab fa-node-js", level: "Intermediate" },
    { skill: "Git", icon: "fab fa-git-alt", level: "Intermediate" }
  ];

  const experienceList = [
    { 
      role: "Junior Web Developer", 
      company: "Sivasakthi Software Services Private Limited", 
      duration: "2019 - Present",
      description: "Leading frontend development team, implementing modern web technologies and best practices"
    },
    { 
      role: "Frontend Developer", 
      company: "Sivasakthi Software Technologies", 
      duration: "2016 - 2019",
      description: "Developed responsive web applications using React and modern JavaScript"
    }
  ];

  const contactEmail = "silu.sylver@gmail.com";
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AI-Sylvester", icon: "fab fa-github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/infant-sylvester-7446a7a4", icon: "fab fa-linkedin" },
    { name: "Twitter", url: "https://x.com/silu.sylver", icon: "fab fa-twitter" },
    { name: "Instagram", url: "https://instagram.com/infant_sylvester", icon: "fab fa-instagram" }
  ];
  const projectsList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React to showcase skills and projects.",
      url: "https://aisylvester.netlify.app/"
    },
    {
      title: "E-Commerce Store",
      description: "A fully functional online store with cart and checkout features.",
      url: "https://riazshopy.netlify.app/"
    },
    {
      title: "ListoSylvester",
      description: "A Simple Customized Musical App-Listen to your favorite Songs",
      url: "https://listova.netlify.app/"
    }
  ];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'general',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ''
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.enquiryType)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setFormStatus({
        submitted: true,
        message: 'Thank you for your message! Your email client will open to send the message.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: 'general',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        message: 'Sorry, there was an error. Please try again or email directly at ' + contactEmail
      });
    }
  };

  return (
    <div className="App">
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
        <img src={logo} alt="AIS Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about-me" className={activeSection === 'about-me' ? 'active' : ''}>About</a></li>
              <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
              <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="section">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <h1>Hi, I'm Arokia Infant Sylvester</h1>
              <p className="tagline">Full Stack Web Developer</p>
              <p className="intro">
                I create beautiful and functional web experiences that help businesses grow and succeed in the digital world.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="cta-primary">Get in Touch</a>
                <a href="#projects" className="cta-secondary">View My Work</a>
              </div>
            </div>
            <div className="home-visual">
              <img src={righthome} alt="Arokia Infant Sylvester" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="section">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-me-content">
      <div className="about-me-image">
              <img src={abouts} alt="Arokia Infant Sylvester" />
      </div>
      <div className="about-me-text">
        <p>{aboutMeText}</p>
              <div className="about-me-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
      </div>
    </div>
  </div>
</section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {educationList.map((edu, index) => (
              <div key={index} className="education-card">
                <h3>{edu.degree}</h3>
                <p className="field">{edu.field}</p>
                <p className="school">{edu.school}</p>
                <p className="duration">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <div key={index} className="skill-card">
                <i className={skill.icon}></i>
                <h3>{skill.skill}</h3>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="section">
  <div className="container">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projectsList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-preview">
            <iframe
              src={project.url}
              title={project.title}
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            ></iframe>
          </div>
          <a
            className="project-expand-btn"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in New Tab
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experienceList.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                <h3>Get in Touch</h3>
                <p>Let's work together! Feel free to reach out.</p>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>18, Ashok Residency C Block, Othakalmandpam, Coimbatore</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9894305194</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
            <a href={`mailto:${contactEmail}`} className="email-link">
              {contactEmail}
            </a>
                  </div>
                </div>
              </div>
          <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiryType">Enquiry Type</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Proposal</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
              {formStatus.submitted && (
                <div className={`form-status ${formStatus.message.includes('error') ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Arokia Infant Sylvester. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
