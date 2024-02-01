/* eslint-disable react/jsx-no-target-blank */

const WppBtn = () => {
  return (
    <a
      href="https://wa.me/5491125185895"
      target="_blank"
      data-tip="Comunicate con nuestros especialistas para asesoramiento personalizado"
      className="tooltip tooltip-info tooltip-left fixed rounded-full bottom-5 right-5 md:bottom-10 md:right-10 w-12 md:w-14 shadow-lg hover:brightness-90 cursor-pointer z-50 bg-primary p-3"
    >
      <img
        src="/assets/whatsapp.svg"
        alt="whatsapp"
        className="object-cover"
      />
    </a>
  );
};

export default WppBtn;
