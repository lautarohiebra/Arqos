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

      <div className="w-full h-screen bg-base-100">
        <div className="w-full flex flex-col md:flex-row justify-center align-middle items-center md:items-stretch xl:p-14">
          <div className="prose prose-sm p-16 shadow-md w-full md:w-1/2 bg-base-100 bg-opacity-90 flex-1">
            <h2 className="border-l-4 border-primary pl-2 text-left">
              Servicios Integral de Diseño y Construcción
            </h2>
            <p className="text-justify">
              ARQOS se destaca en ofrecer servicios de diseño y construcción
              creativos, colaborativos y gratificantes.
            </p>
            <p className="text-justify">
              Nuestro paquete integral abarca arquitectura, diseño, ingeniería y
              construcción, reduciendo el riesgo general y mejorando la
              coordinación y precisión de la programación. Desde el desarrollo
              del programa hasta la coordinación de cierre y garantías,
              brindamos soluciones completas y eficientes.
            </p>

            <Link to="/servicios/diseño_y_construcción">
              <button className="btn btn-outline btn-primary rounded-none">
                Mas información
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 w-full bg-black bg-opacity-90 prose prose-sm p-16 text-white flex-1">
            <h2 className="border-l-4 border-primary pl-2 text-white text-left">
              Obras y proyectos llave en mano
            </h2>
            <p className="text-justify">
              ARQOS proporciona una experiencia de OBRAS Y PROYECTOS LLAVE EN
              MANO insuperable al involucrarse desde el principio, resaltar las
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
      </div>
    </section>
  );
};

export default Services;
