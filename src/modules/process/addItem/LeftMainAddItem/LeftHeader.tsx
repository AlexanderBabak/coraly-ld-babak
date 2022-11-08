import React from "react";
import { StackStyled, StyledTypography } from "components/reusable";
import { IconButton, useTheme, Chip } from "@mui/material";
import { DividerVertical } from "modules/process/processItem/toolbar/DividerVertical";
import { AvatarsGroup } from "./AvatarsGroup";
import { ButtonAdd } from "components/buttonAdd/ButtonAdd";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { ChipsStyled } from "./ChipsStyled";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PropaneTankOutlinedIcon from "@mui/icons-material/PropaneTankOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const LeftHeader = () => {
  const { palette, typography } = useTheme();
  const styles = {
    iconButton: { marginRight: "4px" },
    iconCalendar: { color: palette.text.secondary },
    iconPerson: { color: palette.text.secondary, marginRight: 1 },
    labelData: {
      bgcolor: palette.grey[200],
      color: palette.info.dark,
      height: 22,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightRegular,
      lineHeight: "18px",
      padding: "0 10px",
    },
  };
  return (
    <>
      <StackStyled justifyContent="space-between">
        <StackStyled>
          <AvatarsGroup />
          <ButtonAdd />
        </StackStyled>

        <StackStyled>
          <IconButton disableRipple size="small" sx={styles.iconButton}>
            <CreatorSVG iconName={"MacroFasi"} color={palette.primary.main} />
          </IconButton>

          <StyledTypography
            fontWeight={typography.fontWeightMedium}
            lineHeight="18px"
            color={palette.text.secondary}
          >
            Chapter One
          </StyledTypography>
          <IconButton disableRipple size="small">
            <ExpandMoreOutlinedIcon color="disabled" />
          </IconButton>
        </StackStyled>

        <StackStyled columnGap={1}>
          <CalendarTodayOutlinedIcon sx={styles.iconCalendar} />
          <StyledTypography
            fontWeight={typography.fontWeightMedium}
            color={palette.text.secondary}
            lineHeight="18px"
          >
            05/10/2021 - 17:50
          </StyledTypography>
        </StackStyled>
      </StackStyled>
      <ChipsStyled />

      <StackStyled direction="row" justifyContent="space-between">
        <StackStyled direction="row" alignItems="center">
          <PersonOutlineOutlinedIcon sx={styles.iconPerson} />
          <StyledTypography
            fontWeight={typography.fontWeightMedium}
            color={palette.text.secondary}
            lineHeight="18px"
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
            sx={styles.labelData}
          />
          <Chip
            icon={<PropaneTankOutlinedIcon fontSize="small" />}
            label="#db-object1"
            sx={styles.labelData}
          />
        </StackStyled>
      </StackStyled>
    </>
  );
};
