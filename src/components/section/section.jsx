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
        {/* Displaying the section title */}
        <h3>{title}</h3>

        {/* Displaying the "Show All" or "Collapse All" text based on the toggle state */}
        <h4 className="toggleText" onClick={handleToggle}>
          {!carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>

      {/* Checking if there is data to display */}
      {data.length === 0 ? (
        // If no data, display a CircularProgress component
        <CircularProgress />
      ) : (
        // If there is data
        <div className={`cardsWrapper ${carouselToggle ? 'flexedCards' : ''}`}>
          {/* <div className={`cardsWrapper ${carouselToggle ? 'flexedCards' : ''}`}> */}

          {!carouselToggle ? (
            // If toggle is false, display individual cards
            <div className="wrapperSection">
              {data.map((ele) => (
                // Rendering the Card component for each data item
                <Card
                  // key={ele.id} // Uncomment if you have a unique key for each card
                  data={ele}
                  type={type}
                />
              ))}
            </div>
          ) : (
            // If toggle is true, display a Carousel with cards
            <Carousel
              data={data}
              renderComponent={(data) => (
                // Rendering the Card component within the Carousel
                <Card
                  // key={data.id} // Uncomment if you have a unique key for each card
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
