import "./Favorites.css";

import React from "react";
import Cookies from "js-cookie";
import Card from "../../components/Card/Card";
import deadPool from "../../assets/img/deadpool.png";
import spiderman from "../../assets/img/spiderman.png";

const Favorites = (props) => {
  const { favorite, setFavorite } = props;

  Cookies.get("favorite");
  return (
    <div className="favorites-page">
      {favorite.length > 0 ? (
        <>
          <h2 className="title-favorite">Vos favoris</h2>
          <div className="favorite-container">
            <div className="favorite-deadpool">
              <p className="bubble speech">
                C'est un gag ! J'y suis même pas ! Je vous sens gaguesque.
              </p>
              <img className="img-deadpool" src={deadPool} alt="deadpool-img" />
            </div>
            <div className="cards">
              {favorite.map((elem) => {
                return (
                  <Card
                    key={elem.elem._id}
                    elem={elem.elem}
                    favorite={favorite}
                    setFavorite={setFavorite}
                    heart={false}
                    character={true}
                    comics={true}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="not-favorite">
          <p className="bubble speech">
            Les favoris impliquent de grandes responsabilités...
          </p>
          <img className="img-spiderman" src={spiderman} alt="spiderman-img" />
        </div>
      )}
    </div>
  );
};

export default Favorites;
