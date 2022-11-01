import * as React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useAppSelector } from "redux/reduxType";
import { AppBarStyled } from "./AppBarStyled";
import { CustomSeparator } from "components/breadcrumbs/breadcrumbs";
import { AvatarStyled } from "components/avatar/AvatarStyled";
import { getFirstChairs } from "helpers/getFirstChairs";
import ShortcutIcon from "assets/icons/ShortcutIcon";
import { Stack } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import IconButton from "@mui/material/IconButton";

type Props = {
  open: boolean;
};

export const AppBar: React.FC<Props> = ({ open }) => {
  const { activePageName } = useAppSelector((state) => state.pages);
  const { user } = useAppSelector((state) => state.auth);
  const userName: string = `${user?.name!} ${user?.surname!}`;

  const { palette } = useTheme();

  return (
    <AppBarStyled position="fixed" open={open} role={"app-bar"}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <CustomSeparator activePageName={activePageName} />
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton aria-label="notification">
              <NotificationsOutlinedIcon />
            </IconButton>
            <ShortcutIcon />
            <AvatarStyled
              bgcolor={palette.secondary.light}
              bordercolor={palette.secondary.main}
              marginleft={10}
            >
              {getFirstChairs(userName)}
            </AvatarStyled>
          </Stack>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
