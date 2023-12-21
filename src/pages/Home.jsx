import { Link } from "react-router-dom";
import FixedBg from "../components/shared/FixedBg";

const Home = () => {
  return (
    <main>
      <FixedBg img="/public/assets/imgHeroHome.png" />
      <div className="hero min-h-screen bg-none">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col md:flex-row">
          <img
            src="/public/assets/icon.svg"
            alt="Logo Arqos"
            className="justify-center w-48 md:w-56 lg:w-72 back"
          />
          <div className="max-w-md md:text-left prose">
            <h1 className="mb-5 text-4xl lg:text-5xl md:border-l-2 border-primary pl-2">
              Construyendo sueños, edificando futuros
            </h1>
            <p className="mb-5 text-lg lg:text-xl bg-white bg-opacity-70  p-2">
              Seguridad, eficacia, calidad y eficiencia Provident cupiditate
              voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </p>
            <button className="btn btn-primary rounded-none">
              Mas información
            </button>
          </div>
        </div>
      </div>

      {/* Acerca de Arqos */}
      <div className="w-full min-h-[300px] bg-base-100  flex justify-center align-middle p-10 relative overflow-hidden">
        <img src="./assets/icon.svg" alt="" className="absolute left-auto xl:left-80 z-0 w-80" />
        <div className="prose-sm md:prose z-10 text-justify">
          <h2 className="border-l-4 border-primary pl-2">Acerca de Arqos</h2>
          <p>
            ARQOS es una empresa argentina con sede en Nordelta, Provincia de
            Buenos Aires. Brindamos una gama completa de servicios, que
            incluyen: Proyectos, Construcción General, Gestión de Construcción y
            Diseño, asesoramiento profesional a una lista diversa de clientes
            corporativos, públicos y privados.
          </p>
          <p>
            Nuestra cartera abarca desde instalaciones de uso mixto hasta
            instalaciones recreativas, edificios gubernamentales hasta
            residenciales de lujo, educativos, y especialidad en desarrollos y
            equipamiento para Clínicas y Hospitales. Desde nuestros inicios, nos
            hemos dedicado a brindar excelencia en calidad.
          </p>
        </div>
      </div>

      {/* Servicios */}

      <div className="w-full flex flex-col md:flex-row justify-center align-middle xl:p-14">
        <div className="prose prose-sm p-16 shadow-md w-full md:w-1/2 bg-base-100 bg-opacity-90 ">
          <h2 className="border-l-4 border-primary pl-2">
            Diseño y contrucción
          </h2>
          <p className="text-justify">
            ARQOS ofrece servicios de diseño y construcción creativos,
            colaborativos y gratificantes para la clientela que busca una
            experiencia de construcción con todo incluido.
          </p>
          <p className="text-justify">
            El paquete de diseño y construcción de ARQOS ofrece a la clientela
            servicios de arquitectura, diseño, ingeniería y construcción bajo un
            mismo paraguas, lo que reduce el riesgo general, al tiempo que
            mejora la coordinación y la precisión de la programación.
          </p>

          <Link to="/servicios/diseño_y_construcción">
            <button className="btn btn-outline btn-primary rounded-none">
              Mas información
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 w-full bg-black bg-opacity-90 prose prose-sm p-16 text-white">
          <h2 className="border-l-4 border-primary pl-2 text-white">
            Obras y proyectos llave en mano
          </h2>
          <p className="text-justify">
            ARQOS proporciona una experiencia de OBRAS Y PROYECTOS LLAVE EN MANO
            insuperable al involucrarse desde el principio, resaltar las
            variables potenciales y proporcionar información comercial y de
            programación durante la fase de conceptualización.
          </p>
          <p className="text-justify">
            Los servicios de contratación general están disponibles tanto para
            proyectos de licitación competitiva como de acuerdos negociados.
          </p>
          <Link to="/servicios/obras_y_proyectos">
            <button className="btn btn-outline btn-primary rounded-none">
              Mas información
            </button>
          </Link>
        </div>
      </div>

      {/* Seguridad */}

      <div className="w-full bg-center bg-base-100 flex items-center align-middle justify-center bg-cover p-10" style={{ backgroundImage:`url('./assets/security2.jpg')`}}>
        {/* <img src="./assets/security2.jpg" alt="Seguridad y compromiso" className="w-[600px] hidden" /> */}
        <div className="w-1/2 hidden lg:flex"></div>
        <div className="prose-sm md:prose-base p-10 text-white lg:w-1/2 bg-neutral-900 max-w-[602px]">
          <h2 className="border-l-4 border-primary pl-2 text-white">
            Seguridad y Cumplimiento
          </h2>
          <p className="text-justify">
            Todos los sitios de trabajo de ARQOS operan en un entorno de
            rigurosa Seguridad laboral. Para nosotros la Seguridad de nuestros
            recursos humanos es lo que garantiza su continuidad en nuestra
            empresa, trayectoria con capacitación permanente para la tarea a
            desempeñar.
          </p>
          <p className="text-justify">
            Cumplimos con los mayores estándares de seguridad con nuestro
            personal de obra. Cumplimos con los plazos establecidos desde el
            inicio hasta el final de nuestros proyectos.
          </p>
          <p className="text-justify">
            ¡Todo esto se traduce en SEGURIDAD, EFICACIA, CALIDAD y EFICIENCIA!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
