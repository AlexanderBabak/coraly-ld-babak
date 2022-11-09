import React, { useState } from "react";
import { Stack, Tabs, Tab } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import { TabPanelPart } from "./TabPanelPart";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const tabArr = [
  <ShoppingBagOutlinedIcon fontSize="small" />,
  <FormatLineSpacingOutlinedIcon fontSize="small" />,
  <ModeCommentOutlinedIcon fontSize="small" />,
  <AttachFileOutlinedIcon fontSize="small" />,
  <InsertLinkOutlinedIcon fontSize="small" />,
  <SegmentOutlinedIcon fontSize="small" />,
];

export const RightMainAddItemPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const styles = {
    tabs: {
      borderLeft: 1,
      borderColor: "divider",
      ".MuiTabs-indicator": {
        left: 0,
        width: 3,
      },
      ".MuiTab-root": {
        paddingLeft: 0,
        paddingRight: 0,
        minWidth: 45,
      },
      ".MuiTabs-flexContainer": {
        marginTop: 10,
      },
    },
  };

  return (
    <Stack
      direction="row"
      width="50%"
      padding="0 8px"
      justifyContent="space-between"
    >
      <TabPanelPart value={value} />

      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={styles.tabs}
      >
        {tabArr.map((tab, index) => {
          return <Tab icon={tab} key={index} {...a11yProps(index)} />;
        })}
      </Tabs>
    </Stack>
  );
};
