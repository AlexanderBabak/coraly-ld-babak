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

export const HeaderAddItemPage: React.FC<Props> = ({ handleCloseModal }) => {
  return (
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
  );
};
