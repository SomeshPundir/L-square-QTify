// Import necessary dependencies and styles
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./CustomPagination.module.css";

// Functional component definition for CustomPagination
const CustomPagination = ({ page, pageLimit, totalCount, onPageChange }) => {
  // State to manage the total page count
  const [pageCount, setPageCount] = useState(0);

  // Effect to recalculate the page count when totalCount or pageLimit changes
  useEffect(() => {
    const pageCount = Math.ceil(totalCount / pageLimit);
    setPageCount(pageCount);
  }, [totalCount, pageLimit]);

  // Event handler for page changes
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  // Render the CustomPagination component
  return (
    <div className={styles.wrapper}>
      {/* Material-UI Pagination component */}
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        id={styles.paginationWrapper}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};

// Export the CustomPagination component
export default CustomPagination;
