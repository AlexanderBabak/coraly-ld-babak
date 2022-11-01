import { styled, ListItemButton } from "@mui/material";
import { ListItemButtonProps as MuiListItemButtonProps } from "@mui/material/ListItemButton";
import { CSSObject } from "@mui/material/styles";

interface ListItemButtonProps extends MuiListItemButtonProps {
  height?: number;
  paddingleft?: number | string;
  color?: string;
  fontWeight?: any;
}

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ height, paddingleft, color, fontWeight }): CSSObject => ({
    padding: 0,
    paddingLeft: paddingleft,
    height: height,
    color: color,

    ":hover": {
      backgroundColor: "transparent",
    },

    "& .MuiTypography-root": {
      fontWeight: fontWeight,
      fontSize: "14px",
      lineHeight: "18px",
    },
  })
);

export default ListItemButtonStyled;
