
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./TopAlbums.css";
import Carousel from "../Carousel/Carousel";

const TopAlbums = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);

  const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(  
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="top-wrapper">
      <div className="top-header">
        <h3>Top Albums</h3>
        <h3 className="toggletext" onClick={handleToggle}>
          {toggle ? "Show All" : "Collapse All"}
        </h3>
      </div>
      <div className="topalbum-wrapper">
        {!toggle ? (
          <div className="top-albums">
            {data.map((item) => (
              <Card data={item} type="album" key={item.id} />
            ))}
          </div>
        ) : (
          <Carousel
            data={data}
            renderCardComponent={(item) => <Card data={item} type="album" />}
          />
        )}
      </div>
    </div>
  );
};

export default TopAlbums;
