import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="overlay" data-aos="fade-up" data-aos-delay="200">
          <h1>Juan José López Peña</h1>
          <p>Desarrollador Full Stack</p>
          <a href="#contact" className="cta-button" data-aos="fade-up" data-aos-delay="400">
            ¡Contáctame!
          </a>
        </div>
      </header>

      {/* Proyectos */}
      <section className="projects">
        <div className="container">
          <h2 data-aos="fade-up">Proyectos Destacados</h2>
          <div className="project-list">
            <div className="project" data-aos="zoom-in" data-aos-delay="200">
              <img src=".\public\DALL·E 2025-04-07 10.37.54 - A modern-style image for a personal portfolio showcasing a project based on an API. The scene features a sleek computer screen with glowing code snipp.webp" alt="Proyecto 1" />
              <div className="project-content">
                <h3>Api de one piece</h3>
                <p>API REST de One Piece desarrollada con Spring Boot, utilizando JWT para autenticación segura y MongoDB como base de datos NoSQL para gestionar personajes, tripulaciones y eventos del universo One Piece.</p>
                <a href="https://github.com/JuanJoselopez03/Api_One_Piece" className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver Proyecto <FaArrowRight style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>

            <div className="project" data-aos="zoom-in" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Proyecto 2" />
              <div className="project-content">
                <h3>Gestión de Tareas</h3>
                <p>Aplicación web moderna para organizar tareas con drag & drop y sincronización en la nube.</p>
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver Proyecto <FaArrowRight style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>

            <div className="project" data-aos="zoom-in" data-aos-delay="600">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Proyecto 3" />
              <div className="project-content">
                <h3>E-commerce</h3>
                <p>Tienda online completa con carrito de compras, pasarela de pago y panel de administración.</p>
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver Proyecto <FaArrowRight style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section className="about">
        <div className="about-content" data-aos="fade-left">
          <h2>Sobre Mí</h2>
          <p>
            Soy un estudiante de Desarrollo de Aplicaciones Multiplataforma con una gran pasión por la tecnología y la creación de soluciones digitales.
            Me interesa especialmente el análisis de datos y cómo convertir la información en conocimiento valioso para la toma de decisiones.
          </p>
          <p>
            Cuando no estoy aprendiendo y desarrollando proyectos, me gusta explorar nuevas tecnologías, mejorar mis habilidades en ciencia de datos
            y compartir lo que aprendo a través de blogs y tutoriales.
          </p>

        </div>
      </section>

      {/* Habilidades */}
      <section className="skills">
        <div className="container" data-aos="fade-right">
          <h2>Habilidades</h2>
          <div className="skill-list">
            <div className="skill">HTML5</div>
            <div className="skill">CSS3</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Express</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Git</div>
            <div className="skill">UI/UX Design</div>
            <div className="skill">Responsive Design</div>
            <div className="skill">Docker</div>
            <div className="skill">API Rest</div>


          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 data-aos="fade-up">Contacto</h2>
          <div className="contact-form" data-aos="fade-up" data-aos-delay="200">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo Electrónico" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tu Mensaje" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Conéctate conmigo:</p>
          <div className="social-links">
            <a href="https://github.com/JuanJoselopez03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="juanjoselopez4509@gmail.com" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Juan José. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;