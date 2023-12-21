import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer place-items-center p-10 bg-neutral-900 text-white">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="/public/assets/logoHorizontalLight.svg"
          alt="Arqos Logo"
          className="w-64"
        />
      </div>
      <div className="text-center md:text-left">
        <span className="footer-title mx-auto md:mx-0">Contacto</span>
        <ul>
          <li>Espacio para la direccion</li>
          <li>Mas info de dirección</li>
          <li>Argentina</li>
          <li>Tel: Agregar teléfono</li>
          <li>mail: info@arqos.com.ar</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="footer-title mx-auto md:mx-0">Links</span>
        <Link to="/#home__hero" className="link link-hover">
          Inicio
        </Link>
        <Link to="/nosotros" className="link link-hover">
          Sobre Nosotros
        </Link>
        <Link to="/servicios" className="link link-hover">
          Servicios
        </Link>
        <Link to="/contacto" className="link link-hover">
          Formulario de Contacto
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
