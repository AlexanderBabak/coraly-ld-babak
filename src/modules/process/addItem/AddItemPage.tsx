import React from "react";
import {
  StackStyled,
  StyledButton,
  StyledTypography,
} from "components/reusable";
import {
  IconButton,
  Stack,
  Box,
  Modal,
  Link,
  useTheme,
  Chip,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { InputCards } from "components/reusable/InputCards";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { DividerVertical } from "../processItem/toolbar/DividerVertical";
import { AvatarsGroup } from "./AvatarsGroup";
import { ButtonAdd } from "components/buttonAdd/ButtonAdd";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PropaneTankOutlinedIcon from "@mui/icons-material/PropaneTankOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
};

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

export const AddItemPage: React.FC<Props> = ({
  openModal,
  handleCloseModal,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { palette } = useTheme();

  const styles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "52%",
      transform: "translate(-50%, -50%)",
      // здесь width
      // minWidth: 1200,
      width: "88%",
      // height: "90vh",
      bgcolor: "background.paper",
      borderRadius: "15px",
      p: 4,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.content}>
        {/* header */}
        <Stack direction="row" justifyContent="space-between">
          <StyledTypography fontSize={20} fontWeight={700} lineHeight="36px">
            Courtney@mail.com
          </StyledTypography>
          <Stack direction="row" spacing={2}>
            <Stack direction="row" alignItems="center" spacing="5px">
              <RemoveRedEyeOutlinedIcon color="primary" />
              <Link href="#" fontWeight={600}>
                KO Motivation
              </Link>
            </Stack>
            <Stack direction="row" spacing="5px">
              <IconButton>
                <FolderOutlinedIcon />
              </IconButton>
              <IconButton>
                <CenterFocusWeakOutlinedIcon />
              </IconButton>
              <IconButton>
                <LinkOutlinedIcon />
              </IconButton>
              <IconButton>
                <PlaylistRemoveOutlinedIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlinedIcon />
              </IconButton>
            </Stack>

            <Stack direction="row">
              <DividerVertical />
              <IconButton onClick={handleCloseModal}>
                <CloseOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        {/* main */}
        <Stack direction="row" justifyContent="space-between" marginTop={1}>
          {/* убрать потом ширину */}
          {/* left main */}
          <Stack spacing={1} width="50%" paddingRight={2}>
            <StackStyled justifyContent="space-between">
              <StackStyled>
                <AvatarsGroup />
                <ButtonAdd />
              </StackStyled>

              <StackStyled>
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
                  fontWeight={600}
                  lineHeight="18px"
                  color="#6F6D7B"
                >
                  Chapter One
                </StyledTypography>
                <IconButton disableRipple size="small">
                  <ExpandMoreOutlinedIcon color="disabled" />
                </IconButton>
              </StackStyled>

              <StackStyled columnGap={1}>
                <CalendarTodayOutlinedIcon sx={{ color: "#6F6D7B" }} />
                <StyledTypography
                  fontWeight={600}
                  lineHeight="18px"
                  color="#6F6D7B"
                >
                  05/10/2021 - 17:50
                </StyledTypography>
              </StackStyled>
            </StackStyled>

            <StackStyled direction="row" spacing={1}>
              <Chip
                label="Label 1"
                sx={{
                  bgcolor: "#47BDFF",
                  color: "#fff",
                  width: 82,
                  height: 22,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "18px",
                }}
              />
              <Chip
                label="Label 2"
                sx={{
                  bgcolor: "#E547FF",
                  color: "#fff",
                  width: 82,
                  height: 22,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "18px",
                }}
              />
              <Chip
                label="Label 3"
                sx={{
                  bgcolor: "#FF9F47",
                  color: "#fff",
                  width: 82,
                  height: 22,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "18px",
                }}
              />
              <ButtonAdd />
            </StackStyled>

            <StackStyled direction="row" justifyContent="space-between">
              <StackStyled direction="row" alignItems="center">
                <PersonOutlineOutlinedIcon
                  sx={{ color: "#6F6D7B", marginRight: 1 }}
                />
                <StyledTypography
                  fontWeight={600}
                  lineHeight="18px"
                  color="#6F6D7B"
                >
                  Select vendors
                </StyledTypography>
                <IconButton disableRipple size="small">
                  <ExpandMoreOutlinedIcon color="disabled" />
                </IconButton>
              </StackStyled>

              <DividerVertical />

              <StackStyled columnGap={1}>
                <Chip
                  icon={<PropaneTankOutlinedIcon fontSize="small" />}
                  label="#database_object_1"
                  sx={{
                    bgcolor: "#D6D5D9",
                    color: "#312E43",

                    height: 22,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "18px",
                    padding: "0 10px",
                  }}
                />
                <Chip
                  icon={<PropaneTankOutlinedIcon fontSize="small" />}
                  label="#db-oject1"
                  sx={{
                    bgcolor: "#D6D5D9",
                    color: "#312E43",

                    height: 22,
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "18px",
                    padding: "0 10px",
                  }}
                />
              </StackStyled>
            </StackStyled>
            <Divider />

            <Stack spacing={2}>
              <StyledTypography
                color="#464356"
                fontWeight={600}
                lineHeight="24px"
              >
                Startform Name
              </StyledTypography>
              <InputCards
                label="Email"
                size="small"
                sx={{ paddingBottom: 0 }}
              />
              <InputCards
                label="Description test"
                size="small"
                helperText="This is a description"
                multiline
                minRows={2}
                sx={{ paddingBottom: 0 }}
              />
            </Stack>

            <Stack spacing={2}>
              <StyledTypography
                color="#464356"
                fontWeight={600}
                lineHeight="24px"
              >
                Company data
              </StyledTypography>
              <Stack direction="row" spacing={2}>
                <Stack alignItems="center" spacing={1}>
                  <DescriptionOutlinedIcon sx={{ color: "#9897A1" }} />
                  <Divider
                    orientation="vertical"
                    sx={{ borderRightWidth: 2, height: 150 }}
                  />
                </Stack>

                <Stack spacing={2} flexGrow={1}>
                  <InputCards
                    label="Company name"
                    size="small"
                    sx={{ paddingBottom: 0 }}
                  />
                  <InputCards
                    label="Surname"
                    size="small"
                    sx={{ paddingBottom: 0 }}
                  />
                  <FormControl>
                    <RadioGroup defaultValue="person">
                      <FormControlLabel
                        value="company"
                        control={<Radio sx={{ padding: "5px" }} />}
                        label="Company"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            fontSize: 14,
                            lineHeight: "18px",
                          },
                        }}
                      />
                      <FormControlLabel
                        value="person"
                        control={<Radio sx={{ padding: "5px" }} />}
                        label="Person"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            fontSize: 14,
                            lineHeight: "18px",
                          },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <StyledTypography
                color="#464356"
                fontWeight={600}
                lineHeight="24px"
              >
                Gender
              </StyledTypography>
              <FormControl sx={{ paddingLeft: 1 }}>
                <RadioGroup defaultValue="female">
                  <FormControlLabel
                    value="male"
                    control={<Radio sx={{ padding: "5px" }} />}
                    label="Male"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        lineHeight: "18px",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio sx={{ padding: "5px" }} />}
                    label="Female"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        lineHeight: "18px",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="not declared"
                    control={<Radio sx={{ padding: "5px" }} />}
                    label="Not declared"
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontSize: 14,
                        lineHeight: "18px",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>

          {/* right main origin*/}

          <Stack
            direction="row"
            width="50%"
            padding="0 8px"
            justifyContent="space-between"
          >
            {/* content sidebar */}

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

            {/* sidebar */}
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
        </Stack>

        {/* footer */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginTop={2}
        >
          <StyledTypography
            color="#464356"
            fontWeight={600}
            fontSize={16}
            lineHeight="24px"
          >
            Fase ID:{" "}
            <Box
              component="span"
              sx={{ fontWeight: 400, fontSize: 14, lineHeight: "18px" }}
            >
              61571535e7058c00143322b8
            </Box>
          </StyledTypography>
          <Stack flexDirection="row" justifyContent="flex-end">
            <StyledButton
              text="Annula"
              fullWidth={false}
              variant="outlined"
              onClick={handleCloseModal}
            ></StyledButton>
            <StyledButton
              text="Crea"
              fullWidth={false}
              marginleft="16px"
              color="secondary"
              disableElevation={true}
              onClick={() => console.log("Create Process!")}
            ></StyledButton>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

/*

*/
