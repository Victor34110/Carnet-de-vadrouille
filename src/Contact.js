import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';


function Contact() {
  return (
    <div className="main-contact">
      <div className="overlay-contact"></div>

      <h1 className="Contact-title">Mes contacts</h1>

      <ul className="contact-list">
        <li>
          <a href="https://github.com/Victor34110/Carnet-de-vadrouille" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub </a>
          
        </li>
        <li>
          <a href="https://linkedin.com/in/galian-victor" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn </a>
          
        </li>
        <li>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt className="icon" /> Mon CV </a>
          
        </li>
        <li>
          <a href="mailto:vic.galian22@gmail.com">
            <FaEnvelope className="icon" /> vic.galian22@gmail.com </a>
          
        </li>
      </ul>

    </div>
  );
}

export default Contact;
