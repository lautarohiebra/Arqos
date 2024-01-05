import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
/* import { Link } from "react-router-dom"; */
import { items } from "../data/serviceItems";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section>
      {/* Swiper */}

      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper cursor-grab flex flex-row overflow-hidden"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={`expo_${index}`}
              className={`w-screen min-h-[400px] lg:min-h-[600px] bg-cover bg-center ${item.imagen}`}
            >
              <div className="w-full h-full bg-black opacity-40"></div>
              <div className="font-semibold relative bottom-28 lg:bottom-44 p-3 ml-5 max-w-[70%]">
                <h2 className="border-l-primary border-l-2 pl-2 md:bg-opacity-80 inline text-white text-sm md:text-md lg:text-2xl">
                  {item.titulo}
                </h2>
                {/* <p className="mb-5 text-sm lg:text-base">{item.descripcion}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Intro servicios */}

      <div className="w-full min-h-[600px] p-10 flex flex-col md:flex-row align-middle items-center justify-center gap-5">
        <div className="w-full lg:w-1/2 flex flex-row gap-2 lg:gap-6 justify-center lg:justify-end lg:p-5 -mt-4">
          <img
            src="/assets/servicios.jpg"
            alt="Arqos Servicios img"
            className="w-36 h-72 md:w-48 md:h-80 lg:w-56 xl:w-60 lg:h-[400px] object-cover -mt-10 grayscale shadow-md"
          />
          <img
            src="/assets/servicios2.jpg"
            alt="Arqos Servicios img2"
            className="w-36 h-72 md:w-48 md:h-80 lg:w-56 xl:w-60 lg:h-[400px] object-cover grayscale shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 p-5 lg:p-10 flex justify-center lg:justify-start">
          <div className="flex flex-col max-w-md">
            <span className="text-xs font-semibold tracking-wider">
              - NUESTROS SERVICIOS
            </span>
            <h2 className="font-semibold text-xl mt-">
              Transforma Tu Visión en Realidad con ARQOS
            </h2>
            <p className="text-sm  font-semibold my-5">
              Bienvenido a la puerta de entrada a la excelencia arquitectónica.
              En ARQOS, no simplemente construimos estructuras, creamos
              experiencias.{" "}
            </p>
            <p className="text-sm ">
              Descubre una nueva dimensión en el mundo de la construcción, donde
              cada proyecto es una oportunidad para fusionar creatividad y
              funcionalidad.
            </p>
            <p className="text-sm mt-2">
              En ARQOS, no nos limitamos a edificar estructuras; damos vida a
              ideas, desde la conceptualización hasta la realidad tangible.
            </p>
            <p className="text-sm mt-2">
              Con un enfoque centrado en el cliente, trabajamos en estrecha
              colaboración contigo para entender tus necesidades, aspiraciones y
              sueños arquitectónicos. Nos enorgullece ofrecer soluciones a
              medida que reflejen tu estilo único y satisfagan tus objetivos
              específicos.
            </p>

            <Link to="/contacto">
              <button className="btn btn-outline rounded-none my-8">COMIENZA AHORA</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
