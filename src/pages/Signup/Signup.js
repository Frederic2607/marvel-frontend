import "./Signup.css";

import React from "react";

import underConstruction from "../../assets/img/underConstruction2.png";

const Signup = () => {
  return (
    <div>
      {" "}
      <div className="signup-page">
        <p className="bubble speech">
          Arrière ! Cette page n'est pas encore disponible.
        </p>
        <img
          className="img-iron"
          src={underConstruction}
          alt={underConstruction}
        />
      </div>
    </div>
  );
};

export default Signup;
