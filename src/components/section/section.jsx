// Import necessary dependencies and styles
import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../../components/Card/Card";
import Carousel from "../Carousel/Carousel";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { useSnackbar } from "notistack";

// Functional component definition for Section
const Section = ({ title, data, type, header, loadingState }) => {
  // Snackbar hook for displaying notifications
  const { enqueueSnackbar } = useSnackbar();

  // State for toggling between Carousel and Card view
  const [carouselToggle, setCarouselToggle] = useState(true);

  // Function to handle toggling between Carousel and Card view
  const _handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  // Render the Section component
  return (
    <div className={styles.sectionWrapper}>
      {/* Header section */}
      {header === "all" ? (
        <></>
      ) : (
        <div className={styles.header}>
          <h3>{title}</h3>
          {/* Toggle text for switching between Carousel and Card view */}
          <h4 className={styles.toggleText} onClick={_handleToggle}>
            {carouselToggle ? "Show all" : "Collapse"}
          </h4>
        </div>
      )}

      {/* Main content section */}
      {data?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            // Card view
            <div className={styles.wrapper}>
              {data?.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            // Carousel view
            <Carousel
              data={data}
              renderCardComponent={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      ) : loadingState ? (
        // Skeleton loader when data is still loading
        <SkeletonLoader name={"card"} count={5} />
      ) : (
        // Display an error message when no data is found
        <div>
          {/* Snackbar notification for data loading failure */}
          {enqueueSnackbar("Loading Data failed. Try again later", { variant: "error" })} 
          <p style={{ color: 'red', fontWeight: 'bold' }}>Error: No Data Found</p>
        </div>
      )}
    </div>
  );
};

// Export the Section component
export default Section;
