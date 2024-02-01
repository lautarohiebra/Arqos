/* import { Link } from "react-router-dom"; */
import { Link } from "react-router-dom";
import FixedBg from "../components/shared/FixedBg";
import { aboutData } from "../data/aboutData";

const About = () => {
  return (
    <main>
      <FixedBg 
      img="/assets/aboutPageHero2.jpg"
      height="400px" />
      <section>
        <div className="w-full h-[400px] relative flex items-center align-middle md:justify-start justify-center">
          <div className="absolute w-full h-full bg-black opacity-30"></div>
          <div className="absolute w-full h-full bg-gradient-to-br from-black" />
          <div className="absolute p-10 leading-none text-center md:text-left">
            <span className="text-md md:text-2xl text-primary opacity-70">
              CONOCE MÁS{" "}
            </span>
            <h2 className="font-bold text-base-100 leading-none text-3xl md:text-5xl">
              SOBRE <span className="font-light tracking-widest">NOSOTROS</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Intro About */}

      <section className="bg-base-100 relative z-0">
        <div className="bg-[url('/assets/about.jpg')] absolute w-full h-full bg-cover -z-10 opacity-10  bg-center" />

        {/* Items */}

        <div className="mx-auto min-h-[300px] flex flex-col md:flex-row items-center md:items-start gap-5 content-between align-middle justify-center md:px-16 max-w-[980px]">
          {/* Item 1 */}

          <div className="flex flex-row items-center text-center bg-white shadow-md p-5 w-64 -my-5 z-30 gap-2 md:my-10 md:shadow-none md:bg-transparent">
            <span className="font-extrabold text-5xl text-primary w-1/2 nasalization">
              +10
            </span>
            <p className="text-xs font-semibold tracking-wider w-1/2 md:text-left">
              Años de experiencia brindando
            </p>
          </div>

          {/* Item 2 */}

          <div className="px-5 text-center md:text-left md:w-1/3 mt-5 md:my-10">
            <span className="text-primary text-sm md:hidden">
              - SOBRE NOSOTROS -
            </span>
            <span className="text-primary text-sm hidden md:block">
              - SOBRE NOSOTROS
            </span>
            <h2 className="text-xl lg:text-3xl font-semibold">
              Soluciones arquitectónicas creativas y profesionales
            </h2>
          </div>

          {/* Item 3 */}

          <div className="md:w-1/3 text-center md:text-left md:my-10 md:px-5 px-10">
            <p className="opacity-60  text-sm">
              En ARQOS, la excelencia arquitectónica es más que una meta; es
              nuestro estándar.
            </p>
            <p className="opacity-60  text-sm ">
              Como expertos en diseño y construcción, ofrecemos soluciones a
              medida con un enfoque profesional y compromiso inquebrantable.
            </p>
            <div className="lg:text-left mt-5 mb-10">
              <Link to="/contacto">
                <button className="btn btn-outline btn-sm btn-primary rounded-none">
                  TRABAJA CON NOSOTROS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[600px] bg-neutral flex flex-col items-center align-middle justify-center px-10 py-20 gap-10">
        <div className="px-5 text-center md:text-left md:w-full  text-base-100 mb-8">
          <span className="text-primary text-sm md:hidden">
            - SOBRE NOSOTROS -
          </span>
          <span className="text-primary text-sm hidden md:block">
            - SOBRE NOSOTROS
          </span>
          <h2 className="text-xl lg:text-2xl font-semibold">
            Transformando la arquitectura
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center align-middle gap-4 flex-wrap">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="p-6 border-[1px] w-72 h-80 hover:invert bg-neutral transition-all"
            >
              <div className="flex">{item.icon}</div>
              <h2 className="text-xl font-semibold text-base-100 mt-4 mb-2">
                {item.title}
              </h2>
              <p className="text-base-100 font-extralight text-sm">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative min-h-[600px] bg-center bg-[url('/assets/aboutCTA2.jpg')] bg-cover flex flex-col items-center align-middle justify-center p-10 text-base-100">
        <div className="bg-black absolute w-full h-full opacity-20 z-10" />
        <div className="flex flex-col items-center max-w-2xl text-center gap-5 z-20">
          <h2 className="font-semibold text-xl md:text-2xl text-white">
            Convierte tus Aspiraciones en Realidad
          </h2>
          <p className="text-sm md:text-base">
            En ARQOS, no solo construimos estructuras; creamos espacios que
            trascienden el tiempo y la tendencia. <br /> Únete a nosotros y experimenta
            la diferencia de la maestría arquitectónica.
          </p>
          <Link to="/Contacto">
            <button
              className="btn btn-outline btn-primary rounded-none w-40 text-xs lg:text-base font-light">
              CONTÁCTANOS
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
