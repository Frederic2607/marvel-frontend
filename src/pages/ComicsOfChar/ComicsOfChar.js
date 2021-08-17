import "./ComicsOfChar.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import Card from "../../components/Card/Card";

const ComicsOfChar = (props) => {
  const { favorite, setFavorite } = props;

  const params = useParams();
  const { characterId } = params;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  Cookies.set("favorite", favorite);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fred-marvel-backend.herokuapp.com/comics/${characterId}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    "En cours de chargement..."
  ) : (
    <div className="comics-character">
      <h2 className="title-charOfComics">{data.name}</h2>
      <div className="cards">
        {data.comics.map((elem) => {
          return (
            <Card
              key={elem._id}
              elem={elem}
              favorite={favorite}
              setFavorite={setFavorite}
              heart={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComicsOfChar;
