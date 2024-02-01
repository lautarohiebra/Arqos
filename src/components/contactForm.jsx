import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const initialFormData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const fieldErrors = {};

    // Required fields validation
    if (!formData.name) fieldErrors.name = "Este campo es obligatorio.";
    if (!formData.surname) fieldErrors.surname = "Este campo es obligatorio.";
    if (!formData.email) fieldErrors.email = "Este campo es obligatorio.";

    // Name and last name validation
    if (formData.name && !nameRegex.test(formData.name)) {
      fieldErrors.name = "El Nombre no debe contener números ni espacios.";
    }
    if (formData.surname && !nameRegex.test(formData.surname)) {
      fieldErrors.surname = "El Apellido no debe contener números ni espacios.";
    }

    // Email validation
    if (formData.email && !emailRegex.test(formData.email)) {
      fieldErrors.email =
        "Por favor, ingresa una dirección de correo electrónico válida.";
    }

    // Phone number validation
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      fieldErrors.phone =
        "Por favor, ingresa un número de teléfono válido (10 dígitos).";
    }

    setErrors(fieldErrors);

    return Object.keys(fieldErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send the form using emailjs
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("Datos enviados:", formData);
            console.log(result.text);
            handleReset();
            setFormSubmitted(true);
          },
          (error) => {
            console.log("Error al enviar el formulario:", error.text);
          }
        );
    } else {
      console.log("Formulario no válido. Verifica los campos.");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return formSubmitted ? (
    <div className="flex flex-col text-base-100 w-full h-full items-center align-middle justify-center min-h-[300px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 text-success mb-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-xl md:text-2xl font-bold mb-4">¡Le agradecemos su consulta!</h2>

      <p className="text-sm md:text-base">Su mensaje ha sido enviado correctamente.</p>
    </div>
  ) : (
    <div className="flex flex-col p-8 items-center w-full xl:w-auto align-middle justify-center">
      <h2 className="mb-6 text-left w-full p-5 text-base-100 font-semibold text-xl lg:text-3xl">
        Déjenos su <span className="font-light">Consulta</span>
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        method="POST"
        className="w-[80%] flex flex-col justify-center align-middle max-w-[480px]"
      >
        <div className="mb-4">
          {/*             <label htmlFor="name" className="block tracking-wider text-base-100">
              Nombre *
            </label> */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Nombre"
            className="border-base-300 w-full border-b-[1px] bg-transparent px-3 py-1 text-base-100  placeholder:text-base-200 placeholder:tracking-widest hover:border-b-primary transition-all"
          />
          {/* Mensaje de error */}
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="mb-4">
          {/*             <label htmlFor="surname" className="block tracking-wider text-base-100">
              Apellido *
            </label> */}
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            placeholder="Apellido"
            className="border-base-300 w-full border-b-[1px] bg-transparent px-3 py-1 text-base-100  placeholder:text-base-200 placeholder:tracking-widest hover:border-b-primary transition-all"
          />
          {/* Mensaje de error */}
          {errors.surname && (
            <span className="text-red-500 text-sm">{errors.surname}</span>
          )}
        </div>

        <div className="mb-4">
          {/*             <label htmlFor="email" className="block tracking-wider text-base-100">
              Correo Electrónico *
            </label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Dirección de correo eléctronico"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-base-300 w-full border-b-[1px] bg-transparent px-3 py-1 text-base-100  placeholder:text-base-200 placeholder:tracking-widest hover:border-b-primary transition-all"
          />
          {/* Mensaje de error */}
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          {/*             <label htmlFor="phone" className="block tracking-wider text-base-100">
              Teléfono
            </label> */}
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número de teléfono"
            className="border-base-300 w-full border-b-[1px] bg-transparent px-3 py-1 text-base-100  placeholder:text-base-200 placeholder:tracking-widest hover:border-b-primary transition-all"
          />
          {/* Mensaje de error */}
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block tracking-wider text-base-100"
          >
            ¿En qué podemos ayudarte?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-base-300 w-full border-b-[1px] bg-transparent px-3 py-1 text-base-100  placeholder:text-base-200 placeholder:tracking-widest hover:border-b-primary transition-all h-24 resize-none"
          />
        </div>
        <div className="flex justify-around w-full">
          <button
            id="btn_submit"
            type="submit"
            value="Send"
            className="btn btn-outline btn-primary rounded-none py-2 px-4 montserrat"
          >
            Enviar
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-outline btn-accent rounded-none py-2 px-4 montserrat"
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
