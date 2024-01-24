import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { benefits2, items } from "../data/serviceItems";
import { benefits } from "../data/serviceItems";

const Services = () => {

  return (
    <main>
      {/* Swiper */}

      <section className="w-full">
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
      </section>

      {/* Intro servicios */}

      <section className="w-full min-h-[600px] p-10 flex flex-col md:flex-row align-middle items-center justify-center gap-5">
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
            <span className="text-xs font-semibold tracking-wider text-primary">
              - NUESTROS SERVICIOS
            </span>
            <h2 className="font-semibold text-xl lg:text-3xl">
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

            <div>
              <Link to="/contacto">
                <button className="btn btn-outline rounded-none my-8">
                  COMIENZA AHORA
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}

      {/* Diseño y construcción */}

      <section
        id="diseño"
        className="w-full min-h-[600px] bg-neutral flex flex-col md:flex-row bg-[url('/assets/building8.png')] bg-right-top bg-cover lg:bg-contain bg-no-repeat py-10"
      >
        <div className="w-full lg:ml-36 xl:ml-60 p-10 flex justify-center lg:justify-start">
          <div className=" flex flex-col max-w-xl p-10 lg:p-0 align-middle justify-center backdrop-blur-3xl backdrop-brightness-50 lg:backdrop-brightness-100 text-base-100">
            <span className="text-xs font-semibold tracking-wider text-primary">
              - NUESTROS SERVICIOS
            </span>
            <h2 className="font-semibold text-xl lg:text-3xl">
              Diseño y construcción
            </h2>
            <p className="text-sm  font-semibold my-5">
              Nuestros servicios de diseño y construcción ofrecen una
              experiencia completa bajo un mismo techo, fusionando arquitectura,
              diseño, ingeniería y construcción.
            </p>
            <p className="text-sm ">
              Simplifica tu camino hacia la construcción de tus sueños,
              reduciendo riesgos y mejorando la coordinación.
            </p>

            <ul className="list-disc my-6 p-4">
              {benefits.map((benefit, index) => (
                <li key={`benefit_design_${index}`} className="text-sm mt-1">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="text-center lg:text-left">
              <Link to="/contacto">
                <button className="btn btn-outline btn-primary rounded-none my-8">
                  CONTÁCTANOS PARA MÁS INFORMACIÓN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Obras y proyectos llave en mano */}

      <section
        id="llave_en_mano"
        className="w-full min-h-[600px] bg-base-100 flex flex-col md:flex-row bg-[url('/assets/building9.png')] bg-left-bottom  bg-cover lg:bg-contain bg-no-repeat justify-end"
      >
        <div className="w-full lg:mr-36 xl:mr-60 p-10 flex justify-center lg:justify-end">
          <div className="flex flex-col max-w-xl p-10 lg:p-5 align-middle justify-center backdrop-blur-3xl backdrop-brightness-50 lg:backdrop-brightness-100 text-white lg:text-neutral">
            <span className="text-xs font-semibold tracking-wider text-primary">
              - NUESTROS SERVICIOS
            </span>
            <h2 className="font-semibold text-xl lg:text-3xl">
              Obras y proyectos llave en mano
            </h2>
            <p className="text-sm  font-semibold my-5">
              Transforma tus ideas en realidad con la experiencia insuperable de
              Obras y Proyectos Llave en Mano de ARQOS.
            </p>
            <p className="text-sm ">
              Desde el inicio, destacamos variables potenciales, proporcionamos
              información comercial y de programación durante la
              conceptualización y ofrecemos servicios de contratación general.
            </p>

            <ul className="list-disc my-5 p-4">
              {benefits2.map((benefit, index) => (
                <li key={`benefit_proyects_${index}`} className="text-sm mt-1">
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="text-center lg:text-left">
              <Link to="/contacto">
                <button className="btn btn-outline btn-primary rounded-none my-8">
                  CONTÁCTANOS PARA MÁS INFORMACIÓN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
