// Import necessary dependencies and styles
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";
import { allSongsTabs } from "../../config/helper-config";

// Functional component definition for FilterTabs
const FilterTabs = ({ data, loadingState }) => {
  // State to track the selected tab value
  const [value, setValue] = useState(0);

  // Event handler for tab changes
  const _handleTabs = (e, val) => {
    setValue(val);
  };

  // Function to render content based on tab index
  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }

  // Function to filter data based on the selected tab value
  const filteredData = (tabIndex) => {
    if (tabIndex === 0) {
      return data; // Show all data for the "All" tab.
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
      return data?.filter((item) => item?.genre?.key === tabLabel?.toLowerCase());
    }
  };

  // Render the FilterTabs component
  return (
    <div className={styles.filterSectionWrapper}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* Tabs for filtering data */}
          <Tabs value={value} onChange={_handleTabs} aria-label="basic tabs" id={styles.tabs_wrapper}>
            {allSongsTabs.map((each) => (
              <Tab label={each} key={each} sx={{ color: "white" }} />
            ))}
          </Tabs>
        </Box>

        {/* Render content based on the selected tab */}
        {allSongsTabs.map((_, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div>
              {/* Section component displaying filtered data */}
              <Section
                data={filteredData(index)}
                type="songs"
                header={"filterAll"}
                loadingState={loadingState}
              />
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

// Export the FilterTabs component
export default FilterTabs;
