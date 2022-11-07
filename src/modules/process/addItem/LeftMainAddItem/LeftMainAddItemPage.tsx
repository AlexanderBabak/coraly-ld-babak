import React from "react";
import { StackStyled, StyledTypography, InputCards } from "components/reusable";
import {
  IconButton,
  Stack,
  useTheme,
  Chip,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { DividerVertical } from "modules/process/processItem/toolbar/DividerVertical";
import { AvatarsGroup } from "./AvatarsGroup";
import { ButtonAdd } from "components/buttonAdd/ButtonAdd";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PropaneTankOutlinedIcon from "@mui/icons-material/PropaneTankOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const LeftMainAddItemPage = () => {
  const { palette } = useTheme();
  return (
    <Stack spacing={1} width="50%" paddingRight={2}>
      <StackStyled justifyContent="space-between">
        <StackStyled>
          <AvatarsGroup />
          <ButtonAdd />
        </StackStyled>

        <StackStyled>
          <IconButton disableRipple size="small" sx={{ marginRight: "4px" }}>
            <CreatorSVG iconName={"MacroFasi"} color={palette.primary.main} />
          </IconButton>

          <StyledTypography fontWeight={600} lineHeight="18px" color="#6F6D7B">
            Chapter One
          </StyledTypography>
          <IconButton disableRipple size="small">
            <ExpandMoreOutlinedIcon color="disabled" />
          </IconButton>
        </StackStyled>

        <StackStyled columnGap={1}>
          <CalendarTodayOutlinedIcon sx={{ color: "#6F6D7B" }} />
          <StyledTypography fontWeight={600} lineHeight="18px" color="#6F6D7B">
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
          <StyledTypography fontWeight={600} lineHeight="18px" color="#6F6D7B">
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
        <StyledTypography color="#464356" fontWeight={600} lineHeight="24px">
          Startform Name
        </StyledTypography>
        <InputCards label="Email" size="small" sx={{ paddingBottom: 0 }} />
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
        <StyledTypography color="#464356" fontWeight={600} lineHeight="24px">
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
        <StyledTypography color="#464356" fontWeight={600} lineHeight="24px">
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
  );
};
