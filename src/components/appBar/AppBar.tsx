import * as React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { useAppSelector } from "redux/reduxType";
import { StyledBox, StyledTypography } from "components/reusable";
import { AppBarStyled } from "./AppBarStyled";

const styles = {
  badge: {
    "& .MuiBadge-badge": {
      fontSize: "15px",
      lineHeight: "20px",
    },
  },
};

type Props = {
  open: boolean;
};

export const AppBar: React.FC<Props> = ({ open }) => {
  const { activePageName } = useAppSelector((state) => state.pages);

  const { palette, typography } = useTheme();

  return (
    <AppBarStyled position="fixed" open={open} role={"app-bar"}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <StyledTypography
            color={palette.primary.main}
            fontWeight={typography.fontWeightMedium}
            fontSize={17}
            lineHeight={"22px"}
          >
            {activePageName}
          </StyledTypography>
          <StyledBox gap={4}>
            <CreatorSVG iconName={"Logout"} color={palette.primary.main} />
            <Badge sx={styles.badge} badgeContent={2} color="error">
              <StyledTypography
                color={palette.primary.main}
                fontFamily={"Source Sans Pro, sans-serif"}
                fontWeight={typography.fontWeightRegular}
                fontSize={15}
                lineHeight={"20px"}
                role={"notification"}
              >
                {"Whats new?"}
              </StyledTypography>
            </Badge>
          </StyledBox>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
