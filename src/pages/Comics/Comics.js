import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import ironMan from "../../assets/img/ironman.png";
import Pagination from "../../components/Pagination/Pagination";

const Comics = (props) => {
  const { name, setName, favorite, setFavorite } = props;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [numberPage, setNumberPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [maxPage, setMaxPage] = useState(0);

  Cookies.set("favorite", favorite);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://fred-marvel-backend.herokuapp.com/comics?title=${name}&skip=${skip}&limit=${limit}`
      );
      setData(response.data.results);
      setLimit(response.data.limit);
      setMaxPage(Math.ceil(response.data.count / limit));
      setIsLoading(false);
    };
    fetchData();
  }, [name, skip, limit]);

  return isLoading ? (
    "En cours de chargement..."
  ) : (
    <div className="comics-page">
      <Pagination
        numberPage={numberPage}
        setNumberPage={setNumberPage}
        limit={limit}
        maxPage={maxPage}
        setSkip={setSkip}
      />
      <div className="bubble-search">
        <p className="bubble speech">
          <SearchBar setName={setName} name={name} />
        </p>
      </div>
      <div className="comics-container">
        <div className="card-searcher">
          <img src={ironMan} alt="ironman-img" />
        </div>
        <div className="cards">
          {data.map((elem) => {
            return (
              <Card
                key={elem._id}
                elem={elem}
                comics={true}
                favorite={favorite}
                setFavorite={setFavorite}
                heart={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comics;
