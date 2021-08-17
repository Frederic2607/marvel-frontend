import "./Login.css";

import React from "react";

import underConstruction from "../../assets/img/underConstruction2.png";

const Login = () => {
  return (
    <div className="login-page">
      <p className="bubble speech">
        Arrière ! Cette page n'est pas encore disponible.
      </p>
      <img
        className="img-iron"
        src={underConstruction}
        alt={underConstruction}
      />
    </div>
  );
};

export default Login;
