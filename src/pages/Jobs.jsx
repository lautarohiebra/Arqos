import FixedBg from "../components/shared/FixedBg";

const Jobs = () => {
  return (
    <main className="min-h-screen">
      <FixedBg img="/assets/jobsPageHero.jpg" height="400px" />
      <section>
        <div className="w-full h-[400px] relative flex items-center align-middle md:justify-start justify-center">
          <div className="absolute w-full h-full bg-black opacity-20" />
          <div className="absolute w-full h-full bg-gradient-to-br from-black" />
          <div className="absolute p-10 leading-none text-center md:text-left">
            <span className="text-md md:text-2xl text-primary opacity-80">
              EMPLEOS{" "}
            </span>
            <h2 className="font-bold text-base-100 leading-none text-3xl md:text-5xl">
              FORMA PARTE DE{" "}
              <span className="font-light tracking-widest">ARQOS</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-base-100 w-full h-[600px] bg-cover bg-center bg-[url('/assets/jobs.jpg')] z-0 relative">
        <div className="bg-base-100 w-full h-full opacity-80 z-10 absolute" />
        <div className="w-full h-full flex items-center justify-center align-middle z-20 absolute">
          <div className="flex flex-col max-w-md text-center p-5">
            <span className="text-xs font-semibold tracking-wider text-primary">
              - EMPLEOS -
            </span>
            <h2 className="font-semibold text-xl lg:text-3xl">Únete a ARQOS</h2>
            <p className="text-sm  font-semibold my-5">
              Si estás en busca de una oportunidad para destacar, un lugar donde
              tus habilidades impacten, un espacio para crecer y formar parte de
              un equipo, donde tu carrera sea más que un trabajo, entonces ARQOS
              es el lugar ideal para ti.
            </p>
            <p className="text-sm ">
              Al igual que buscamos construir relaciones sólidas con nuestros
              clientes a través de servicios de alta calidad, también buscamos
              personas comprometidas en construir relaciones laborales a largo
              plazo que respalden los ideales y objetivos de nuestra empresa.
            </p>
            <p className="text-sm mt-2 bg-primary text-white p-2 shadow-md">
              Estamos en búsqueda de talento. <br /> Envía tu CV a <span className="font-semibold badge">rrhh@arqos.com.ar</span> y
              descubre cómo puedes formar parte de nuestro equipo en ARQOS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jobs;
