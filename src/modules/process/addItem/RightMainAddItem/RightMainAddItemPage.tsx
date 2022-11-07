import React, { useState } from "react";
import { StyledTypography, InputCards } from "components/reusable";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import {
  IconButton,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
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
        <Stack flexGrow={1} paddingRight={2}>
          {children}
        </Stack>
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

export const RightMainAddItemPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { palette } = useTheme();
  return (
    <Stack
      direction="row"
      width="50%"
      padding="0 8px"
      justifyContent="space-between"
    >
      <TabPanel value={value} index={0}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Fields’ Phase
        </StyledTypography>
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
                marginRight={40}
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
                  lineHeight: "18px",
                  marginRight: 1,
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
            <Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
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
                  >
                    New Contract
                  </StyledTypography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingRight: 0 }}>
            <InputCards
              size="small"
              label="Start date"
              fullWidth
              sx={{ paddingBottom: 0, marginTop: 1 }}
            />
          </AccordionDetails>
        </Accordion>

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
            <Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center">
                  <IconButton
                    disableRipple
                    size="small"
                    sx={{ marginRight: "4px" }}
                  >
                    <CreatorSVG
                      iconName={"Start"}
                      color={palette.primary.main}
                    />
                  </IconButton>

                  <StyledTypography
                    fontSize={18}
                    fontWeight={700}
                    lineHeight="27px"
                    color="#464356"
                  >
                    Start
                  </StyledTypography>
                </Stack>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingRight: 0 }}>
            <InputCards
              size="small"
              label="Start"
              fullWidth
              sx={{ paddingBottom: 0, marginTop: 1 }}
            />
          </AccordionDetails>
        </Accordion>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Attention!!!!
        </StyledTypography>

        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          This could be your ad
        </StyledTypography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Attention!!!!
        </StyledTypography>

        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          This could be your ad
        </StyledTypography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Attention!!!!
        </StyledTypography>

        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          This could be your ad
        </StyledTypography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Attention!!!!
        </StyledTypography>

        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          This could be your ad
        </StyledTypography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          Attention!!!!
        </StyledTypography>

        <StyledTypography
          fontSize={18}
          fontWeight={700}
          lineHeight="27px"
          marginBottom={4}
        >
          This could be your ad
        </StyledTypography>
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
          ".MuiTab-root": {
            paddingLeft: 0,
            paddingRight: 0,
            minWidth: 45,
          },
          ".MuiTabs-flexContainer": {
            marginTop: 10,
          },
        }}
      >
        <Tab
          icon={<ShoppingBagOutlinedIcon fontSize="small" />}
          {...a11yProps(0)}
        />
        <Tab
          icon={<FormatLineSpacingOutlinedIcon fontSize="small" />}
          {...a11yProps(1)}
        />
        <Tab
          icon={<ModeCommentOutlinedIcon fontSize="small" />}
          {...a11yProps(2)}
        />
        <Tab
          icon={<AttachFileOutlinedIcon fontSize="small" />}
          {...a11yProps(3)}
        />
        <Tab
          icon={<InsertLinkOutlinedIcon fontSize="small" />}
          {...a11yProps(4)}
        />
        <Tab
          icon={<SegmentOutlinedIcon fontSize="small" />}
          {...a11yProps(5)}
        />
      </Tabs>
    </Stack>
  );
};
