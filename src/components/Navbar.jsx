import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      path: "/",
      name: "Inicio",
    },
    {
      path: "/Servicios",
      name: "Servicios",
    },
    {
      path: "/Nosotros",
      name: "Nosotros",
    },
    {
      path: "/Empleo",
      name: "Empleo",
    },
  ];

  return (
    <>
      <header
        className={`w-full px-5 sm:px-1 py-1 fixed top-0 z-50 transition-all ${
          scrolling ? "bg-neutral shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="navbar container mx-auto font-semibold">
          <div className="navbar-start">
            <div id="nav-dropdown" className="dropdown mr-1">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-none lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* Links menu toogle */}

              <ul
                tabIndex={0}
                className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 text-center ${
                  menuOpen ? "block" : "hidden"
                }`}
              >
                {links.map((link, index) => (
                  <li className="hover-bordered" key={index}>
                    <Link 
                    to={link.path}
                    onClick={closeMenu}>{link.name}</Link>
                  </li>
                ))}
                <Link to="/contacto">
                  <button 
                  className="btn btn-primary btn-sm w-48 mt-2 rounded-none"
                  onClick={closeMenu}>
                    Contacto
                  </button>
                </Link>
              </ul>
            </div>
            <Link to="/">
              <img
                src="/assets/LogoHorizontalLight.svg"
                alt="Logo"
                className="w-52 min-w-[150px]"
              />
            </Link>
          </div>
          <div className=" navbar-center hidden lg:flex">
            {/* Links Desktop */}

            <ul className="menu menu-horizontal px-1 gap-2 text-base">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-primary rounded-none text-base-100 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/contacto"
              className="btn btn-primary btn-outline rounded-none hidden sm:flex text-md font-light"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
