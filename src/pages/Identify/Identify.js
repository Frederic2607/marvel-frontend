import "./Identify.css";

import React from "react";
import { Link } from "react-router-dom";
import imgWolverine from "../../assets/img/xmen.png";

const Identify = () => {
  return (
    <div className="identify-page">
      <p className="bubble speech">
        Cyclope ? Tornade ?… Et vous c’est quoi ? Réacteur !?
      </p>
      <div className="identify-container">
        <Link to="/signup">
          <button className="btn-signup">Inscription</button>
        </Link>
        <img className="img-wolverine" src={imgWolverine} alt="wolverine-img" />
        <Link to="/login">
          <button className="btn-login">Connexion</button>
        </Link>
      </div>
    </div>
  );
};

export default Identify;
