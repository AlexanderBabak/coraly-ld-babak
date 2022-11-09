import React from "react";
import { StyledTypography } from "components/reusable";
import { IconButton, Stack, Link, useTheme } from "@mui/material";
import { DividerVertical } from "../../processItem/toolbar/DividerVertical";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

type Props = {
  handleCloseModal: () => void;
};

const icons = [
  <FolderOutlinedIcon />,
  <CenterFocusWeakOutlinedIcon />,
  <LinkOutlinedIcon />,
  <PlaylistRemoveOutlinedIcon />,
  <DeleteOutlinedIcon />,
];

export const HeaderAddItemPage: React.FC<Props> = ({ handleCloseModal }) => {
  const { typography } = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between">
      <StyledTypography
        fontSize={20}
        fontWeight={typography.fontWeightBold}
        lineHeight="36px"
      >
        Courtney@mail.com
      </StyledTypography>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" alignItems="center" spacing="5px">
          <RemoveRedEyeOutlinedIcon color="primary" />
          <Link href="#" fontWeight={typography.fontWeightMedium}>
            KO Motivation
          </Link>
        </Stack>
        <Stack direction="row" spacing="5px">
          {icons.map((icon, index) => (
            <IconButton key={index}>{icon}</IconButton>
          ))}
        </Stack>

        <Stack direction="row">
          <DividerVertical />
          <IconButton onClick={handleCloseModal}>
            <CloseOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
