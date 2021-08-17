// import "../../components/Card/Card.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Card = (props) => {
  const { elem, character, comics, favorite, setFavorite, heart } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
    handleFavorite();
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const handleFavorite = () => {
    let newFavorite = [...favorite];
    newFavorite.push({ elem });
    Cookies.set("favorites", newFavorite);
    setFavorite(newFavorite);
  };

  return (
    <div className="card-page">
      <div className="card-container">
        <div className="card">
          {character ? (
            <>
              <FontAwesomeIcon
                icon="heart"
                onClick={setModalIsOpenToTrue}
                size="3x"
                className={heart ? "card-heart-char" : "hidden"}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                overlayClassName="overlay"
              >
                <p>{`${elem.name} a été ajouté à vos favoris.`} </p>
                <button onClick={setModalIsOpenToFalse}>OK</button>
              </Modal>
              <div className="card-content">
                <h2 className="title-char">{elem.name}</h2>
                <Link to={`/comics/${elem._id}`}>
                  <img
                    src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                    alt={elem.name}
                  />
                </Link>
              </div>
              <div className="card-description">
                <p>{elem.description}</p>
              </div>
            </>
          ) : comics ? (
            <>
              <FontAwesomeIcon
                icon="heart"
                onClick={setModalIsOpenToTrue}
                size="3x"
                className={heart ? "card-heart-comics" : "hidden"}
              />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                overlayClassName="overlay"
              >
                <p>{`${elem.title} a été ajouté à vos favoris.`} </p>
                <button onClick={setModalIsOpenToFalse}>OK</button>
              </Modal>
              <div className="card-content">
                <h2 className="title-comics">{elem.title}</h2>
                <img
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt={elem.name}
                />
              </div>
              <div className="card-description">
                <p>{elem.description}</p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
