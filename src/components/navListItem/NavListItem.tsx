import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { ListItemStyled } from "./ListItemStyled";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { StyledBox } from "components/reusable";
import { Page } from "interfaces/pageInterface";
import ListItemButtonStyled from "./ListItemButtonStyled";
import { useAppSelector, useAppDispatch } from "redux/reduxType";
import { setActivePage } from "modules/pages/pagesSlice";

type Props = {
  page: Page;
  open: boolean;
};

const NavListItem: React.FC<Props> = ({ page, open }) => {
  const styles = {
    badge: {
      "& .MuiBadge-badge": {
        width: "24px",
        height: "24px",
        fontSize: "14px",
        fontFamily: "Source Sans Pro, sans-serif",
        fontWeight: 600,
        padding: 0,
        borderRadius: 12,
        color: "#ffffff",
      },
    },
    listIcon: {
      minWidth: 0,
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...(open && { mr: "16px" }),
    },
    expandedIcon: {
      minWidth: 0,
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mr: "20px",
      ...(!open && { display: "none" }),
    },
    link: {
      textDecoration: "none",
    },
  };

  const { palette } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const { activePageName } = useAppSelector((state) => state.pages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkIsPageActive(activePageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePageName]);

  const checkIsPageActive = (pageName: Page["displayName"] | null): void => {
    if (activePageName && page.displayName === pageName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <ListItemStyled
        disablePadding
        color={palette.primary.main}
        marginbottom={page.name !== "logOut" ? 2 : 0}
      >
        <StyledBox
          width={3}
          height={32}
          bgcolor={isActive ? palette.secondary.main : "transparent"}
          marginRight={4}
          borderRadius={20}
        />
        <StyledBox
          bgcolor={isActive ? palette.grey["500"] : "transparent"}
          width={"100%"}
          borderRadius={4}
        >
          <ListItemButtonStyled
            disableGutters
            disableRipple
            paddingleft={open ? 13 : 15}
            height={32}
            color={isActive ? palette.secondary.main : palette.primary.dark}
            onClick={() => {
              dispatch(setActivePage(page.displayName));
            }}
          >
            <ListItemIcon sx={styles.listIcon}>
              <CreatorSVG
                iconName={page.iconName}
                color={isActive ? palette.secondary.main : palette.primary.main}
              />
            </ListItemIcon>
            {open && <ListItemText primary={page.displayName} />}
          </ListItemButtonStyled>
        </StyledBox>
      </ListItemStyled>
    </>
  );
};

export default NavListItem;
