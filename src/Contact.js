import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import fondContact from './fond-contact.jpg';

function Contact() {
  return (
    <div className="main-contact" style={{ backgroundImage: `url(${fondContact})` }}>
      <div className="overlay-contact"></div>

      <div className="contact-inner">
        <h1 className="Contact-title">Mes contacts</h1>
        <p className="contact-subtitle">
          GitHub, LinkedIn, CV et email — tout est ici.
        </p>

        <ul className="contact-list">
          <li>
            <a
              href="https://github.com/Victor34110/Carnet-de-vadrouille"
              target="_blank"
              rel="carnet de vadrouille"
            >
              <FaGithub className="icon" />
              <span className="contact-text">GitHub</span>
              <span className="contact-arrow">→</span>
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/galian-victor"
              target="_blank"
              rel="linkedin"
            >
              <FaLinkedin className="icon" />
              <span className="contact-text">LinkedIn</span>
              <span className="contact-arrow">→</span>
            </a>
          </li>

          <li>
            <a
              href="/Carnet-de-vadrouille/CV.pdf"
              target="_blank"
              rel="CV"
            >
              <FaFileAlt className="icon" />
              <span className="contact-text">Mon CV</span>
              <span className="contact-arrow">→</span>
            </a>
          </li>

          <li>
            <a href="mailto:vic.galian22@gmail.com">
              <FaEnvelope className="icon" />
              <span className="contact-text">vic.galian22@gmail.com</span>
              <span className="contact-arrow">→</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
