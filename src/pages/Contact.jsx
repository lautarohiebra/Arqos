import ContactForm from "../components/contactForm";
import FixedBg from "../components/shared/FixedBg";

const Contact = () => {
  return (
    <main>
      <FixedBg img="/assets/contactoHero.jpg" height="400px" />
      <section>
        <div className="w-full h-[400px] relative flex items-center align-middle md:justify-start justify-center">
          <div className="absolute w-full h-full bg-black opacity-20" />
          <div className="absolute w-full h-full bg-gradient-to-br from-black" />
          <div className="absolute p-10 leading-none text-center md:text-left">
            <span className="text-md md:text-2xl text-primary opacity-80">
              CONTACTO{" "}
            </span>
            <h2 className="font-bold text-base-100 leading-none text-3xl md:text-5xl">
              COMUNICATE CON{" "}
              <span className="font-light tracking-widest"> NOSOTROS</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="md:h-[600px] w-full flex flex-col md:flex-row bg-[url('/assets/contactFormBgDesktop.jpg')] bg-cover bg-center">
        <div className="h-full w-full md:w-3/5 bg-black bg-opacity-90 backdrop-grayscale">
          <ContactForm />
        </div>

        {/* Contact info */}

        <div className="h-full md:w-2/5 flex items-center bg-black bg-opacity-90 backdrop-grayscale">
          <div className="hidden h-[70%] w-full p-9 md:flex flex-col align-middle justify-center bg-gradient-to-br from-base-100 to-base-300">
            <h2 className="text-xl lg:text-3xl font-semibold mb-2 text-left w-full px-5 text-neutral ">
              Información de <span className="font-light">Contácto</span>
            </h2>
            <ul className="px-5 text-sm lg:text-base">
              <li className="mt-3">
                <span className="font-semibold">HORARIOS DE ATENCIÓN</span>
                <p>Lunes-Viernes 8:30hs. a 17:30hs.</p>
              </li>
              <li className="mt-3">
                <span className="font-semibold">DIRECCIÓN</span>
                <p>Marcelo T. De Alvear 1342 CABA</p>
                <p>Buenos Aires Argentina</p>
              </li>

              <li className="mt-3">
                <span className="font-semibold">Teléfono:</span> +54 9 11
                2518-5895
              </li>
              <li className="mt-3">
                <span className="font-semibold">Corréo:</span> info@arqos.com.ar
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
