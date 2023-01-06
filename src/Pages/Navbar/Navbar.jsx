import styles from "./Navbar.module.css";
import logo from "../../Assets/Images/Movies.svg";
import { useState } from "react";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(1);
  let toggleNavbar = (value) => {
    setNavbar(value);
  };

  let HtmlNavbar = (
    <div className="h-screen bg-black">
      <div
        className={`${styles.navbarContainer} flex justify-between items-center px-20 border-b-2 border-b-white/20 bg-gradient-to-b from-black`}
      >
        <img
          onClick={() => {
            toggleNavbar(1);
          }}
          src={logo}
          alt="Logo"
          className="h-2/4 cursor-pointer"
        />
        <div className="flex h-full items-center">
          <div
            onClick={() => {
              toggleNavbar(1);
            }}
            // className="flex items-center h-full bg-gradient-to-t from-primary/20 border-b-2 border-b-primary"
            className={
              `flex items-center h-full bg-gradient-to-t hover:from-primary/20 cursor-pointer ` +
              (navbar === 1
                ? `border-b-2 border-b-primary from-primary/20`
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
              `flex items-center h-full bg-gradient-to-t hover:from-primary/20 cursor-pointer  ` +
              (navbar === 2
                ? `border-b-2 border-b-primary from-primary/20`
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
        <div>
          <p className="text-2xl text-white">Perfil</p>
        </div>
      </div>
      <div className={styles.contentContainer}>{props.component}</div>
    </div>
  );
  return HtmlNavbar;
};

export default Navbar;
