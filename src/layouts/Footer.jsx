import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="container text-center">
          <h5 className="mb-1">Mattia Esposito</h5>
          <p className="small">Full Stack Web Developer</p>

          {/* Link Navigazione */}
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <a className="nav-link text-light" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">Progetti</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contact">Contatti</a>
            </li>
          </ul>

          {/* Icone Social */}
          <div className="mb-3">
            <a href="https://github.com/MattiaEsposito98" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mattia-esposito-597866351/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:espositomattia3198@gmail.com" className="text-light mx-2">
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="small mb-0">© {new Date().getFullYear()} Mattia Esposito. Tutti i diritti riservati.</p>
        </div>
      </footer>

      {/* Bootstrap Icons (Aggiungi nel <head> del tuo index.html se non già presente) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />
    </>
  );
}
