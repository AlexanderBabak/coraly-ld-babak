import { StyledTypography } from "components/reusable";
import { useTheme, Stack } from "@mui/material";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionSummary,
  IconButton,
  Chip,
  AccordionDetails,
} from "@mui/material";
import Box from "@mui/material/Box";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { InputCards } from "components/reusable/InputCards";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Stack>{children}</Stack>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const ModelliPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { palette, typography } = useTheme();
  return (
    <>
      <Stack marginTop={10} spacing={2}>
        <StyledTypography
          fontSize={36}
          lineHeight="45px"
          fontWeight={typography.fontWeightBold}
          color={palette.text.primary}
        >
          Welcome to Modelli!
        </StyledTypography>

        <StyledTypography
          fontSize={20}
          lineHeight="30px"
          fontWeight={typography.fontWeightLight}
          color={palette.text.secondary}
        >
          Work with your team mates, take track of your process and close all
          tasks
        </StyledTypography>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "space-between",
          //   height: 224,
        }}
      >
        <TabPanel value={value} index={0}>
          <Accordion
            square
            sx={{
              boxShadow: "none",
              marginBottom: 2,
              "&.MuiAccordion-root:before": {
                height: 0,
              },
              "&.Mui-expanded": {
                margin: 0,
                marginBottom: 3,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                bgcolor: "#F6F8FA",
                height: 50,
                borderRadius: "8px",
                "&.Mui-expanded": {
                  minHeight: 50,
                },
              }}
            >
              <Stack direction="row" alignItems="center">
                <IconButton
                  disableRipple
                  size="small"
                  sx={{ marginRight: "4px" }}
                >
                  <CreatorSVG
                    iconName={"MacroFasi"}
                    color={palette.primary.main}
                  />
                </IconButton>

                <StyledTypography
                  fontSize={18}
                  fontWeight={700}
                  lineHeight="27px"
                  color="#464356"
                  marginRight={39}
                >
                  Phase 2
                </StyledTypography>
                <Chip
                  label="Ready"
                  sx={{
                    bgcolor: "#F93E6C",
                    color: "#fff",
                    width: 82,
                    height: 22,
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 18,
                  }}
                />
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingRight: 0 }}>
              <InputCards
                size="small"
                label="Contract number"
                fullWidth
                sx={{ paddingBottom: 0, marginTop: 1 }}
              />
              <InputCards
                size="small"
                label="Contract number 2"
                fullWidth
                sx={{ paddingBottom: 0, marginTop: 2 }}
              />
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>

        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderLeft: 1,
            borderColor: "divider",
            ".MuiTabs-indicator": {
              left: 0,
              width: 3,
            },
          }}
        >
          <Tab icon={<ShoppingBagOutlinedIcon />} {...a11yProps(0)} />
          <Tab icon={<FormatLineSpacingOutlinedIcon />} {...a11yProps(1)} />
          <Tab icon={<ModeCommentOutlinedIcon />} {...a11yProps(2)} />
          <Tab icon={<AttachFileOutlinedIcon />} {...a11yProps(3)} />
          <Tab icon={<InsertLinkOutlinedIcon />} {...a11yProps(4)} />
          <Tab icon={<SegmentOutlinedIcon />} {...a11yProps(5)} />
        </Tabs>
      </Box>
    </>
  );
};
