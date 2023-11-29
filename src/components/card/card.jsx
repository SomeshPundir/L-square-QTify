// Import necessary dependencies and styles
import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

// Functional component definition for Card
const Card = ({ data, type }) => {
  // Hook for navigating to different routes
  const navigate = useNavigate();

  // Function to determine and render the appropriate card based on the 'type'
  const getCard = (type) => {
    switch (type) {
      // Case for 'album' type
      case "album":
        return (
          // Tooltip for displaying the number of songs in the album
          <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
            {/* Clickable card wrapper for albums */}
            <div className={styles.wrapper} onClick={() => navigate(`/album/${data?.slug}`)}>
              {/* Album card content */}
              <div className={styles.card}>
                {/* Album cover image */}
                <img src={data.image} alt="album" />
                {/* Banner section with a Chip displaying the number of follows */}
                <div className={styles.banner}>
                  <Chip label={`${data.follows} Follows`} className={styles.chip} size="small" />
                </div>
              </div>
              {/* Title wrapper for the album */}
              <div className={styles.titleWrapper}>
                <p>{data.title}</p>
              </div>
            </div>
          </Tooltip>
        );

      // Case for 'songs' type
      case "songs":
        return (
          // Wrapper for songs card
          <div className={styles.wrapper}>
            {/* Songs card content */}
            <div className={styles.card}>
              {/* Song cover image */}
              <img src={data.image} alt="song" loading="lazy" />
              {/* Banner section with a pill displaying the number of likes */}
              <div className={styles.banner}>
                <div id={styles.pill}>
                  <p>{data.likes} Likes</p>
                </div>
              </div>
            </div>
            {/* Title wrapper for the song */}
            <div className={styles.titleWrapper}>
              <p>{data.title}</p>
            </div>
          </div>
        );

      // Default case for unknown 'type'
      default:
        return <></>;
    }
  };

  // Render the appropriate card based on the 'type'
  return getCard(type);
};

// Export the Card component
export default Card;
