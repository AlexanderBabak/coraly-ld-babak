import { Avatar, styled } from "@mui/material";
import { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { CSSObject } from "@mui/material/styles";

interface AvatarProps extends MuiAvatarProps {
  marginright?: string | number;
  marginleft?: string | number;
}

export const AvatarGroupStyled = styled(Avatar)<AvatarProps>(
  ({ theme }): CSSObject => ({
    width: 24,
    height: 24,
    backgroundColor: theme.palette.info.main,
    marginRight: "6px",
    fontSize: 10,
    fontWeight: 500,
  })
);
