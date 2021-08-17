import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <span>React</span> at{" "}
        <span>
          <a
            href="https://lereacteur.io"
            target="_blank"
            rel="noreferrer"
            className="lereacteur"
          >
            Le Réacteur&nbsp;
          </a>
        </span>
        by{" "}
        <span>
          <a
            href="https://github.com/Frederic2607"
            target="_blank"
            rel="noreferrer"
          >
            Frédéric Desseaux
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
