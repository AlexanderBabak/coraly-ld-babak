import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { IPage } from "api/process/processDto";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { DrawerStyled } from "./DrawerStyled";
import { DrawerHeaderStyled } from "./DrawerHeaderStyled";
import {
  ListStyled,
  IconButtonStyled,
  StyledBox,
  StyledTypography,
} from "components/reusable";
import NavListItem from "../navListItem/NavListItem";
import { AvatarStyled } from "components/avatar/AvatarStyled";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { getFirstChairs } from "helpers/getFirstChairs";
import CoralyLogo from "assets/coralyLogo";
import CoralyLogoText from "assets/coralyLogoText";
import { pageLog } from "./pages";
import { setActivePage } from "modules/process/pagesSlice";
import { signOut } from "modules/auth/authorizationSlice";

type Props = {
  pages: IPage[];
  open: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<Props> = ({ open, onClose, pages }) => {
  const { palette } = useTheme();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const styles = {
    link: {
      textDecoration: "none",
    },
    header: {
      paddingLeft: "26px",
      backgroundColor: palette.info.main,
    },
    list: {
      backgroundColor: palette.info.main,
      flexGrow: 1,
      paddingLeft: 2,
      paddingRight: 2,
    },
    avatar: {
      backgroundColor: palette.info.main,
    },
    logo: { backgroundColor: palette.info.main },
  };

  return (
    <DrawerStyled variant="permanent" open={open}>
      <DrawerHeaderStyled sx={styles.header}>
        <IconButtonStyled
          onClick={onClose}
          width={24}
          height={24}
          disableRipple
        >
          <CreatorSVG iconName={"Menu"} color={palette.common.white} />
        </IconButtonStyled>
      </DrawerHeaderStyled>

      <StyledBox
        justifyContent="flex-start"
        sx={styles.avatar}
        padding="10px 0 10px 19px"
      >
        <AvatarStyled
          bgcolor={palette.primary.light}
          bordercolor={palette.primary.main}
          marginright={10}
        >
          {getFirstChairs(user?.workspaceName!)}
        </AvatarStyled>

        {open && (
          <StyledTypography
            color={palette.common.white}
            fontSize={14}
            fontWeight={600}
          >
            {user?.workspaceName}
          </StyledTypography>
        )}
      </StyledBox>

      <ListStyled sx={styles.list}>
        {pages.map((page) => (
          <Link to={page.path} key={page.name} style={styles.link}>
            <NavListItem page={page} open={open} />
          </Link>
        ))}
        <StyledBox
          onClick={() => {
            dispatch(signOut());
            dispatch(setActivePage(null));
            navigate("/login");
          }}
        >
          <NavListItem page={pageLog} open={open} />
        </StyledBox>
      </ListStyled>
      <StyledBox justifyContent="center" sx={styles.logo} paddingBottom={3}>
        {open ? <CoralyLogoText /> : <CoralyLogo />}
      </StyledBox>
    </DrawerStyled>
  );
};
