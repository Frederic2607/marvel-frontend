import "./header.css";

import React from "react";
import { Link } from "react-router-dom";
import logoMarvel from "../../assets/img/logoMarvel.png";

const Header = (props) => {
  const { setName, setTitle } = props;

  const handleClick = () => {
    setName("");
    setTitle("");
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              onClick={handleClick}
              className="logo-img"
              src={logoMarvel}
              alt="logo-marvel"
            />
          </Link>
        </div>
        <div className="header-navbar">
          <div className="header-nav">
            <Link to="/">
              <button onClick={handleClick} className="btn-char">
                Personnages
              </button>
            </Link>
            <Link to="/comics">
              <button onClick={handleClick}>Comics</button>
            </Link>
            <Link to="/favorites">
              <button>Favoris</button>
            </Link>
          </div>
          <Link to="/identify">
            <button className="identify">
              Inscription&nbsp; |&nbsp; Connexion
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
