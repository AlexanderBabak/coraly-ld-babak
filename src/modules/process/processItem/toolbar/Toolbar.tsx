import React, { useState } from "react";
import {
  Stack,
  Container,
  Toolbar,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { AppBarStyled } from "components/appBar/AppBarStyled";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import HeightOutlinedIcon from "@mui/icons-material/HeightOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import { StyledTypography } from "components/reusable";
import { ToolbarButton } from "./ToolbarButton";

// должен получить проп open от layout
export const ToolbarStyled = () => {
  const [activeColumns, setActiveColumns] = useState(false);
  const [activeFilters, setActiveFilters] = useState(false);
  const [activeGrouped, setActiveGrouped] = useState(false);
  const [activeOrders, setActiveOrders] = useState(false);
  const [activeColors, setActiveColors] = useState(false);
  const [activeHeight, setActiveHeight] = useState(false);

  return (
    <AppBarStyled
      position="fixed"
      open={false}
      role={"app-bar"}
      sx={{
        top: 66,
        "& .MuiToolbar-root": { padding: "0 20px 0 10px" },
      }}
    >
      <Container disableGutters maxWidth="xl">
        <Toolbar>
          <Stack direction="row" alignItems="center" flexGrow={1} spacing={2}>
            <Stack direction="row" alignItems="center">
              <IconButton
                sx={{
                  "&:hover, &:active": { borderRadius: 1 },
                }}
              >
                <ViewStreamOutlinedIcon color="primary" />
              </IconButton>
              <StyledTypography
                fontSize={12}
                fontWeight={600}
                lineHeight="18px"
                color="#83828E"
              >
                Views
              </StyledTypography>
            </Stack>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderRightWidth: 2 }}
            />

            <Stack direction="row" alignItems="center">
              <IconButton
                sx={{
                  "&:hover, &:active": { borderRadius: 1 },
                }}
              >
                <FormatListBulletedOutlinedIcon color="primary" />
              </IconButton>
              <StyledTypography
                fontSize={12}
                fontWeight={600}
                lineHeight="18px"
                color="#83828E"
              >
                Tables
              </StyledTypography>
              <IconButton disableFocusRipple size="small">
                <ExpandMoreOutlinedIcon color="disabled" />
              </IconButton>
            </Stack>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderRightWidth: 2 }}
            />

            <Stack direction="row" alignItems="center" spacing={1}>
              <ToolbarButton
                backgroundColor="#47FF9133"
                isActive={activeColumns}
                onClick={() => setActiveColumns((prev) => !prev)}
                startIcon={<ViewWeekOutlinedIcon />}
              >
                Columns
              </ToolbarButton>

              <ToolbarButton
                backgroundColor="#FF9F4733"
                isActive={activeFilters}
                onClick={() => setActiveFilters((prev) => !prev)}
                startIcon={<FilterAltOutlinedIcon />}
              >
                Filters
              </ToolbarButton>
              <ToolbarButton
                isActive={activeGrouped}
                onClick={() => setActiveGrouped((prev) => !prev)}
                backgroundColor="#6C47FF33"
                startIcon={<SelectAllOutlinedIcon />}
              >
                Grouped in : Phases
              </ToolbarButton>

              <ToolbarButton
                isActive={activeOrders}
                onClick={() => setActiveOrders((prev) => !prev)}
                backgroundColor="#E547FF33"
                startIcon={<UnfoldMoreOutlinedIcon />}
              >
                Orders
              </ToolbarButton>

              <ToolbarButton
                isActive={activeColors}
                onClick={() => setActiveColors((prev) => !prev)}
                backgroundColor="#47BDFF33"
                startIcon={<PaletteOutlinedIcon />}
              >
                Colors
              </ToolbarButton>

              <ToolbarButton
                isActive={activeHeight}
                onClick={() => setActiveHeight((prev) => !prev)}
                backgroundColor="#FFE24733"
                startIcon={<HeightOutlinedIcon />}
              >
                Height
              </ToolbarButton>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton sx={{ "&:active, &:hover": { color: "red" } }}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <IconButton sx={{ "&:active, &:hover": { color: "red" } }}>
              <SearchOutlinedIcon />
            </IconButton>

            <IconButton sx={{ "&:active, &:hover": { color: "red" } }}>
              <UploadFileOutlinedIcon />
            </IconButton>

            <IconButton sx={{ "&:active, &:hover": { color: "red" } }}>
              <TaskOutlinedIcon />
            </IconButton>

            <IconButton sx={{ "&:active, &:hover": { color: "red" } }}>
              <SettingsOutlinedIcon />
            </IconButton>

            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 700,
                lineHeight: "28px",
                marginLeft: 1,
              }}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              Add
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
