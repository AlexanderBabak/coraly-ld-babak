import { useState } from "react";
import { ToolbarButton } from "./ToolbarButton";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import HeightOutlinedIcon from "@mui/icons-material/HeightOutlined";
import { StackStyled } from "components/reusable";

export const ActiveGroup = () => {
  const [activeColumns, setActiveColumns] = useState(true);
  const [activeFilters, setActiveFilters] = useState(false);
  const [activeGrouped, setActiveGrouped] = useState(true);
  const [activeOrders, setActiveOrders] = useState(false);
  const [activeColors, setActiveColors] = useState(false);
  const [activeHeight, setActiveHeight] = useState(false);

  const toolbarButton = [
    {
      title: "Columns",
      backgroundcolor: "#47FF9133",
      active: activeColumns,
      onClick: () => setActiveColumns((prev) => !prev),
      startIcon: <ViewWeekOutlinedIcon />,
    },
    {
      title: "Filters",
      backgroundcolor: "#FF9F4733",
      active: activeFilters,
      onClick: () => setActiveFilters((prev) => !prev),
      startIcon: <FilterAltOutlinedIcon />,
    },
    {
      title: "Grouped in : Phases",
      backgroundcolor: "#6C47FF33",
      active: activeGrouped,
      onClick: () => setActiveGrouped((prev) => !prev),
      startIcon: <SelectAllOutlinedIcon />,
    },
    {
      title: "Orders",
      backgroundcolor: "#E547FF33",
      active: activeOrders,
      onClick: () => setActiveOrders((prev) => !prev),
      startIcon: <UnfoldMoreOutlinedIcon />,
    },
    {
      title: "Colors",
      backgroundcolor: "#47BDFF33",
      active: activeColors,
      onClick: () => setActiveColors((prev) => !prev),
      startIcon: <PaletteOutlinedIcon />,
    },
    {
      title: "Height",
      backgroundcolor: "#FFE24733",
      active: activeHeight,
      onClick: () => setActiveHeight((prev) => !prev),
      startIcon: <HeightOutlinedIcon />,
    },
  ];
  return (
    <StackStyled direction="row" spacing={1}>
      {toolbarButton.map((button) => (
        <ToolbarButton
          key={button.title}
          backgroundcolor={button.backgroundcolor}
          startIcon={button.startIcon}
          active={button.active}
          onClick={button.onClick}
        >
          {button.title}
        </ToolbarButton>
      ))}
    </StackStyled>
  );
};
