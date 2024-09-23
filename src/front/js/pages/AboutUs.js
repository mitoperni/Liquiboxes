import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal'; // Añadido para animaciones

import "./../../styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Animación de entrada para la sección de información de la empresa */}
      <Slide direction="down">
        <section className="company-info">
          <h1>Sobre Liquiboxes</h1>
          <p>
            Liquiboxes fue fundada por tres estudiantes apasionados de la programación: Miguel, Michell y Elis. 
            Nuestra misión es ayudar a los comercios a liquidar su stock de manera eficiente, conectándolos con 
            clientes que buscan productos de calidad a precios irresistibles. Lo hacemos a través de cajas misteriosas 
            que los usuarios pueden comprar, basadas en sus preferencias.
          </p>
          <h2>Misión</h2>
          <p>
            Queremos transformar la manera en que los comercios gestionan su inventario y ofrecer a los clientes 
            una experiencia única de compra, donde la emoción de recibir una "mystery box" se combina con la satisfacción 
            de obtener productos que realmente desean.
          </p>
        </section>
      </Slide>

      {/* Sección de cómo funciona con animación */}
      <Fade>
        <section className="how-it-works">
          <h2>¿Cómo funciona Liquiboxes?</h2>
          <p>
            Liquiboxes conecta a tiendas que necesitan liquidar inventario con clientes que buscan ofertas. Las tiendas 
            crean "mystery boxes" de diferentes tamaños y precios, seleccionando qué tipos de productos incluir. Los 
            clientes, al registrarse, eligen sus preferencias en términos de tallas, colores y tipos de productos. 
            Con esta información, pueden comprar las cajas que mejor se adapten a sus necesidades.
          </p>
        </section>
      </Fade>

      {/* Animación en las fotos del equipo */}
      <section className="team-section">
        <h2>Conoce a los fundadores</h2>
        <div className="team-members">
          <Fade>
            <div className="team-member">
              <img src="/images/miguel.jpg" alt="Miguel" className="team-photo" />
              <h3>Miguel</h3>
              <p>Desarrollador Full-Stack</p>
              <div className="social-links">
                <a href="https://github.com/miguel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/miguel" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="team-member">
              <img src="/images/michell.jpg" alt="Michell" className="team-photo" />
              <h3>Michell</h3>
              <p>Desarrolladora Front-End</p>
              <div className="social-links">
                <a href="https://github.com/michell" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/michell" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </Fade>

          <Fade>
            <div className="team-member">
              <img src="/images/elis.jpg" alt="Elis" className="team-photo" />
              <h3>Elis</h3>
              <p>Desarrolladora Back-End</p>
              <div className="social-links">
                <a href="https://github.com/elis" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/elis" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="contact-section">
        <Fade>
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta o quieres saber más sobre nosotros, <a href="/contact">contáctanos</a>.</p>
        </Fade>
      </section>
    </div>
  );
};

export default AboutUs;
