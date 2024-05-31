import React from "react";
import { Tooltip, Chip } from "@mui/material";
import "./Card.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title,  follows, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="wrapper">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className="chip"
                  />
                </div>
              </div>
              <div className="toptitle">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />
              <div className="banner">
                <Chip label={`${likes} Likes`} size="small" className="chip" />
              </div>
            </div>
            <div className="toptitle">
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };
  return getCard(type);
};

export default Card;