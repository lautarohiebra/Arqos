import { Link } from "react-router-dom";
import FixedBg from "../components/shared/FixedBg";

const Home = () => {
  return (
    <main>
      <FixedBg img="/assets/ImgHeroHome.png" height="100%" />
      <div className="hero min-h-screen bg-none">
        {/*         <div className="hero-overlay bg-opacity-60"/> */}
        <div className="absolute w-full h-full bg-gradient-to-br from-black opacity-90" />
        <div className="hero-content text-center text-neutral-content flex flex-col md:flex-row">
          <img
            src="/assets/icon.svg"
            alt="Logo Arqos"
            className="justify-center w-32 md:w-56 lg:w-72 back"
          />
          <div className="max-w-md md:text-left prose">
            <h1 className="tracking-wider text-3xl lg:text-5xl md:border-l-4 border-primary pl-2 text-white font-bold">
              Construyendo Sueños, <br /> Diseñando Futuros
            </h1>
            <p className="text-lg lg:text-xl bg-opacity-70 text-white p-2">
              Transformando Espacios y Superando Barreras, Creando Entornos que
              Resonan con la Visión Única de Cada Cliente.
            </p>
            <Link to="/servicios">
              <button className="btn btn-primary rounded-none">
                Mas información
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Acerca de Arqos */}

      <div className="w-full min-h-[300px] bg-base-100  flex justify-center align-middle p-10 relative overflow-hidden">
        <img
          src="/assets/icon.svg"
          alt=""
          className="absolute left-auto xl:left-80 z-0 w-80"
        />
        <div className="prose-sm md:prose z-10 ">
          <h2 className="border-l-4 border-primary pl-2 text-left font-semibold">
            Transformando Visiones en Realidades Arquitectónicas
          </h2>
          <p>
            Ubicada en Nordelta, Provincia de Buenos Aires, ARQOS se distingue
            como una destacada empresa argentina especializada en diseño y
            construcción. Nos enorgullece ofrecer una gama completa de
            servicios, que incluyen Proyectos, Construcción General, Gestión de
            Construcción y Diseño, así como asesoramiento profesional a una
            variada clientela compuesta por empresas corporativas, entidades
            públicas y clientes privados.
          </p>
          <p>
            Nuestra cartera diversificada incluye desde instalaciones de uso
            mixto hasta proyectos recreativos, edificios gubernamentales y
            residenciales de lujo, con especial énfasis en desarrollos y
            equipamiento para Clínicas y Hospitales. Desde nuestros inicios, nos
            hemos dedicado a brindar excelencia en calidad, convirtiendo cada
            proyecto en una expresión de nuestro compromiso con la perfección.
          </p>
        </div>
      </div>

      {/* Servicios */}
      {/* 
      <div className="w-full h-0 text-center absolute">
        <h2 className="text-2xl md:text-3xl font-medium tracking-widest text-white bg-primary inline p-5">SERVICIOS</h2>
      </div>
 */}
      <div className="w-full flex flex-col md:flex-row justify-center align-middle items-center md:items-stretch xl:p-14">
        <div className="prose prose-sm p-16 shadow-md w-full md:w-1/2 bg-black bg-opacity-90 flex-1 text-white">
          <h2 className="border-l-4 border-primary pl-2 text-left text-white">
            Servicios Integral de Diseño y Construcción
          </h2>
          <p className="">
            ARQOS se destaca en ofrecer servicios de diseño y construcción
            creativos, colaborativos y gratificantes.
          </p>
          <p className="">
            Nuestro paquete integral abarca arquitectura, diseño, ingeniería y
            construcción, reduciendo el riesgo general y mejorando la
            coordinación y precisión de la programación. Desde el desarrollo del
            programa hasta la coordinación de cierre y garantías, brindamos
            soluciones completas y eficientes.
          </p>

          <Link to="./servicios/#diseño">
            <button className="btn btn-outline btn-primary rounded-none">
              Mas información
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 w-full bg-base-100 bg-opacity-90 prose prose-sm p-16 flex-1">
          <h2 className="border-l-4 border-primary pl-2 text-left">
            Obras y proyectos llave en mano
          </h2>
          <p className="">
            ARQOS proporciona una experiencia de OBRAS Y PROYECTOS LLAVE EN MANO
            insuperable al involucrarse desde el principio, resaltar las
            variables potenciales y proporcionar información comercial y de
            programación durante la fase de conceptualización.
          </p>
          <p className="">
            Los servicios de contratación general están disponibles tanto para
            proyectos de licitación competitiva como de acuerdos negociados.
          </p>
          <Link to="./servicios/#llave_en_mano">
            <button className="btn btn-outline btn-primary rounded-none">
              Mas información
            </button>
          </Link>
        </div>
      </div>

      {/* Seguridad */}

      <div
        className="w-full bg-center bg-base-100 flex items-center align-middle justify-center bg-cover p-10 relative min-h-[700px]"
        style={{ backgroundImage: `url('./assets/security2.jpg')` }}
      >
        <div className="absolute w-full h-[50%] bottom-0 left-0 bg-gradient-to-t from-neutral z-10" />
        <div className="w-1/2 hidden lg:flex"></div>
        <div className="prose-sm md:prose p-10 lg:w-1/2 bg-base-100 max-w-[602px] shadow-lg z-20">
          <h2 className="border-l-4 border-primary pl-2 font-semibold">
            Compromiso con la Seguridad y Cumplimiento
          </h2>
          <p className="">
            La seguridad laboral es una prioridad inquebrantable para ARQOS. En
            cada sitio de trabajo, operamos bajo rigurosas normas de seguridad,
            asegurando la integridad y el bienestar de nuestros valiosos
            recursos humanos.
          </p>
          <p className="">
            Nuestra dedicación a la capacitación continua garantiza un equipo
            altamente calificado y comprometido, cumpliendo con los más altos
            estándares de seguridad y plazos establecidos en todos nuestros
            proyectos.
          </p>
        </div>
      </div>
      <div className="w-full h-14 bg-neutral"></div>

      {/* Contacto */}

      <div className="bg-[url('/assets/imgContactoHome4.jpg')] w-full bg-cover bg-top p-10 flex align-middle justify-center min-h-screen relative">
        <div className="absolute w-full h-full z-10 " />
        <div className="absolute w-full h-[65%] bottom-0 left-0 bg-gradient-to-t from-neutral z-10" />
        <div className="absolute w-full h-[65%] top-0 left-0 bg-gradient-to-b from-neutral z-10" />
        <div className="text-gray-200 text-center flex flex-col p-10 justify-center align-middle items-center max-w-3xl z-20">
          <h2 className="font-semibold text-xl lg:text-4xl">
            TRANSFORMAMOS TUS IDEAS
            <br /> EN{" "}
            <span className="font-extralight tracking-widest">ESPACIOS</span>{" "}
            QUE
            <span className="border-2 px-2 m-2">IMPACTAN</span>
          </h2>
          <p className="text-sm my-5 lg:text-base xl:text-lg font-light">
            Potencia Tu Visión con Diseño Vanguardista y Construcción de Alta
            Calidad. Descubre Cómo Transformamos Ideas en Realidad
          </p>

          <Link to="/Contacto">
            <button
              className="btn  btn-primary rounded-none w-40 text-xs lg:text-base font-light
            "
            >
              CONTÁCTANOS
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
