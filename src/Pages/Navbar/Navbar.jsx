import styles from "./Navbar.module.css";
import logo from "../../Assets/Images/Movies.svg";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Navbar = (props) => {
  // Define el elemento seleccionado en la navbar
  // 1.Peliculas
  // 2.Series
  // 3.Peliculas o series guardadas por el usuario
  const [navbar, setNavbar] = useState(1);
  let toggleNavbar = (value) => {
    setNavbar(value);
  };

  // Validacion de si el ususario esta logueado en el sistema
  const [userLogged, setUserLogged] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  let toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const [searchValue, setSearchValue] = useState();

  let HtmlNavbar = (
    // Contenedor externo
    <div className="h-screen bg-black">
      {/* Contenedor de la navbar */}
      <div
        className={`${styles.navbarContainer} absolute left-0 top-0 w-full flex justify-between items-center bg-gradient-to-b from-black px-6 md:px-8 lg:px-12 xl:px-20`}
      >
        {/* Logo de la pagina */}
        <img
          onClick={() => {
            toggleNavbar(1);
          }}
          src={logo}
          alt="Logo"
          className="h-2/4 cursor-pointer z-10"
        />

        {/* Contenedor del menu de navegacion */}
        <div className="h-full items-center hidden md:flex">
          <div
            onClick={() => {
              toggleNavbar(1);
            }}
            className={
              `flex items-center h-full hover:bg-gradient-to-t hover:from-primary/20 cursor-pointer ` +
              (navbar === 1
                ? `border-b-2 border-b-primary bg-gradient-to-t from-primary/20`
                : ``)
            }
          >
            <p
              className={
                `text-2xl mx-5 ` +
                (navbar === 1 ? `text-primary` : `text-white`)
              }
            >
              Peliculas
            </p>
          </div>
          <div
            onClick={() => {
              toggleNavbar(2);
            }}
            className={
              `flex items-center h-full hover:bg-gradient-to-t hover:from-primary/20 cursor-pointer  ` +
              (navbar === 2
                ? `border-b-2 border-b-primary bg-gradient-to-t from-primary/20`
                : ``)
            }
          >
            <p
              className={
                `text-2xl mx-5 ` +
                (navbar === 2 ? `text-primary` : `text-white`)
              }
            >
              Series
            </p>
          </div>
        </div>

        {/* Contenedor del area del perfil de usuario e inicio de sesion */}
        {userLogged ? (
          <div className="hidden md:block">
            <p className="text-2xl mx-5 text-white">USUARIO DE PRUEBA</p>
          </div>
        ) : (
          <div className="hidden md:block">
            <a href="/" className="text-white text-2xl mx-6">
              Entrar
            </a>
            <Button text="Registro" type="1"></Button>
          </div>
        )}

        {/* Contenedor del menu hamburguesa que se despliega al cargar el sistema en una pantalla de movil */}
        <div className="flex items-center justify-center text-white h-3/6 z-10 md:hidden">
          <div
            onClick={() => {
              toggleHamburger();
            }}
            className="flex flex-col justify-between h-7 w-9 cursor-pointer"
          >
            <span
              className={
                `h-1 w-full rounded-xl bg-white origin-top-right transition transform duration-200 ease-in-out ` +
                (hamburger ? `-rotate-45` : ``)
              }
            ></span>
            <span
              className={
                `h-1 w-full rounded-xl bg-white transition transform duration-150 ease-in-out ` +
                (hamburger ? `scale-y-0 ` : ``)
              }
            ></span>
            <span
              className={
                `h-1 w-full rounded-xl bg-white origin-bottom-right transition transform duration-200 ease-in-out ` +
                (hamburger ? `rotate-45` : ``)
              }
            ></span>
          </div>
        </div>

        {/* Menu que se despliega cuando el hamburger se activa */}
        <div
          className={
            `absolute w-80 h-screen top-0 bg-secondary md:hidden ` +
            (hamburger
              ? `left-0 animate-navbarIn`
              : `-left-full animate-navbarOut`)
          }
        >
          <div className="w-full mt-20 h-[calc(100%_-_5rem)] px-4">
            {userLogged ? (
              <div>
                <p className="text-2xl mx-5 text-white">USUARIO DE PRUEBA</p>
              </div>
            ) : (
              <div className="flex justify-around">
                <Button text="Entrar" type="2"></Button>
                <Button text="Registro" type="1"></Button>
              </div>
            )}

            {/* Bbarra de busqueda */}
            <SearchBar setSearchValue={setSearchValue}></SearchBar>

            {/* EL SIGUIENTE DIV ES PARA SELECCIONAR ENTRE PELICULAS Y SERIES PARA APLICAR LOS FILTROS DE GENERO */}
            {/* <div className="grid grid-cols-2 mt-4">
              <div
                onClick={() => {
                  toggleNavbar(1);
                }}
                className={
                  `flex justify-center items-center border-2 border-terciary rounded-l-xl ` +
                  (navbar === 1 ? `bg-terciary` : ``)
                }
              >
                <p
                  className={
                    `text-white text-xl ` +
                    (navbar === 1 ? `text-white` : `text-white/50`)
                  }
                >
                  Películas
                </p>
              </div>
              <div
                onClick={() => {
                  toggleNavbar(2);
                }}
                className={
                  `flex justify-center items-center border-2 border-terciary rounded-r-xl ` +
                  (navbar === 2 ? `bg-terciary` : ``)
                }
              >
                <p
                  className={
                    ` text-xl ` +
                    (navbar === 2 ? `text-white` : `text-white/50`)
                  }
                >
                  Series
                </p>
              </div>
            </div> */}

            {/* Contenedor de generos */}
            <div className="mt-4">
              <p className="text-white text-xl">Géneros</p>
              <div className="mx-3 mt-2 grid grid-cols-2 gap-4">
                <a href="/" className="text-white/50 text-md">
                  Acción
                </a>
                <a href="/" className="text-white/50 text-md">
                  Animación
                </a>
                <a href="/" className="text-white/50 text-md">
                  Aventura
                </a>
                <a href="/" className="text-white/50 text-md">
                  Bélico Guerra
                </a>
                <a href="/" className="text-white/50 text-md">
                  Acción
                </a>
                <a href="/" className="text-white/50 text-md">
                  Animación
                </a>
                <a href="/" className="text-white/50 text-md">
                  Aventura
                </a>
                <a href="/" className="text-white/50 text-md">
                  Bélico Guerra
                </a>
                <a href="/" className="text-white/50 text-md">
                  Acción
                </a>
                <a href="/" className="text-white/50 text-md">
                  Animación
                </a>
                <a href="/" className="text-white/50 text-md">
                  Aventura
                </a>
                <a href="/" className="text-white/50 text-md">
                  Bélico Guerra
                </a>
                <a href="/" className="text-white/50 text-md">
                  Acción
                </a>
                <a href="/" className="text-white/50 text-md">
                  Animación
                </a>
                <a href="/" className="text-white/50 text-md">
                  Aventura
                </a>
                <a href="/" className="text-white/50 text-md">
                  Bélico Guerra
                </a>
                <a href="/" className="text-white/50 text-md">
                  Bélico Guerra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor del contenido de la pantalla */}
      <div className="w-full h-screen">{props.component}</div>
    </div>
  );
  return HtmlNavbar;
};

export default Navbar;
