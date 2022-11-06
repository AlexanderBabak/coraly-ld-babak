import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { ListItemStyled } from "./ListItemStyled";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { StyledBox } from "components/reusable";
import { IPage } from "api/process/processDto";
import ListItemButtonStyled from "./ListItemButtonStyled";
import { useAppSelector, useAppDispatch } from "redux/reduxType";
import { setActivePage } from "modules/process/processSlice";

type Props = {
  page: IPage;
  open: boolean;
};

const NavListItem: React.FC<Props> = ({ page, open }) => {
  const styles = {
    listIcon: {
      minWidth: 0,
      width: "24px",
      height: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...(open && { mr: "12px" }),
    },
  };

  const { palette, typography } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const { activePageName } = useAppSelector((state) => state.pages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkIsPageActive(activePageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePageName]);

  const checkIsPageActive = (pageName: IPage["displayName"] | null): void => {
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
        marginbottom={2}
      >
        <StyledBox
          bgcolor={isActive ? "#114262" : "transparent"}
          width={"100%"}
          borderRadius={8}
          height={48}
        >
          <ListItemButtonStyled
            disableGutters
            disableRipple
            paddingleft={10}
            height={32}
            color={isActive ? palette.primary.main : palette.common.white}
            fontWeight={
              isActive
                ? typography.fontWeightMedium
                : typography.fontWeightRegular
            }
            onClick={() => {
              dispatch(setActivePage(page.displayName));
            }}
          >
            <ListItemIcon sx={styles.listIcon}>
              <CreatorSVG
                iconName={page.iconName}
                color={isActive ? palette.primary.main : palette.common.white}
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
