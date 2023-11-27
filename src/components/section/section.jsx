import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/card";
import Carousel from "../carousel/carousel";
import "./section.css";

export default function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
console.log(data);
  return (
    
    <div className="header">
      <div className="arrangeSides">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {!carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="cardsWrapper">
          {!carouselToggle ? (
            <div className="wrapper">
              {data.map((ele) => (
                <Card
                  // key={ele.id}
                  data={ele}
                  type={type}
                />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => (
                <Card
                  // key={data.id}
                  data={data}
                  type={type}
                />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}
