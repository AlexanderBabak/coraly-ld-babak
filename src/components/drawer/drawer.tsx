import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { IconButtonStyled, ListStyled } from "../shared-styled";
import NavListItem from "../nav-list-item/nav-list-item";
import NavigationSelect from "../navigation-select/navigation-select";
import { DrawerStyled } from "./drawer-styled";
import { DrawerHeaderStyled } from "./drawer-header-styled";
import { Page } from "../../interfaces";
import { CreatorSVG } from "components/CreatorSVG/CreatorSVG";

type Props = {
  pages: Page[];
  open: boolean;
  onClose: () => void;
};

export const Drawer: React.FC<Props> = ({ open, onClose, pages }) => {
  const { palette } = useTheme();

  const styles = {
    link: {
      textDecoration: "none",
    },
    header: {
      gap: 12,
      justifyContent: "flex-start",
      paddingLeft: 2.5,
      mb: "16px",
    },
  };

  return (
    <DrawerStyled variant="permanent" open={open}>
      <DrawerHeaderStyled sx={styles.header}>
        {open && <CreatorSVG iconName={"Logo"} />}
        <IconButtonStyled
          onClick={onClose}
          width={24}
          height={24}
          disableRipple
        >
          <CreatorSVG iconName={"Menu"} color={palette.primary.main} />
        </IconButtonStyled>
      </DrawerHeaderStyled>
      <ListStyled marginbottom={60}>
        {pages.map((page) => (
          <Link to={page.path} key={page.id} style={styles.link}>
            <NavListItem page={page} open={open} />
          </Link>
        ))}
      </ListStyled>
      <NavigationSelect open={open} />
    </DrawerStyled>
  );
};
