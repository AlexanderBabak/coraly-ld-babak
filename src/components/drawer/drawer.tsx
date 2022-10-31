import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Page } from "interfaces/pageInterface";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { DrawerStyled } from "./DrawerStyled";
import { DrawerHeaderStyled } from "./DrawerHeaderStyled";
import { ListStyled, IconButtonStyled } from "components/reusable";

import NavListItem from "../navListItem/NavListItem";

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
        {open && <CreatorSVG iconName={"Logout"} />}
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
          <Link to={page.path} key={page.name} style={styles.link}>
            <NavListItem page={page} open={open} />
          </Link>
        ))}
      </ListStyled>
      {/* здесь был navigationselect */}
    </DrawerStyled>
  );
};
