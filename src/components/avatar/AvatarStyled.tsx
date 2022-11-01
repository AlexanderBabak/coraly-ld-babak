import { Avatar, styled } from "@mui/material";
import { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { CSSObject } from "@mui/material/styles";

interface AvatarProps extends MuiAvatarProps {
  bgcolor?: string;
  bordercolor?: string;
  marginright?: string | number;
  marginleft?: string | number;
}

export const AvatarStyled = styled(Avatar)<AvatarProps>(
  ({ bgcolor, bordercolor, marginright }): CSSObject => ({
    backgroundColor: bgcolor,
    border: "1px solid",
    borderRadius: "8px",
    borderColor: bordercolor,
    marginRight: marginright,
    fontSize: 16,
    fontWeight: 600,
  })
);
