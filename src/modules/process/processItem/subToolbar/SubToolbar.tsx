import {
  Stack,
  Container,
  Toolbar,
  IconButton,
  useTheme,
  Chip,
} from "@mui/material";
import { AppBarStyled } from "components/appBar/AppBarStyled";
import { useAppSelector } from "redux/reduxType";
import { ProcessItemTable } from "../table/Table";
import { Card } from "../card/Card";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { StyledTypography } from "components/reusable";
import { ButtonAdd } from "components/buttonAdd/ButtonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const SubToolbar = () => {
  const { isDrawerOpen, isCardOpen } = useAppSelector((state) => state.pages);
  const { palette, typography } = useTheme();

  const styles = {
    appBar: {
      top: 132,
      background: "#F6F8FA",
      border: "none",
      "& .MuiToolbar-root": { padding: "0 20px 0 10px" },
    },
    schede: {
      bgcolor: "#D6D5D9",
      borderRadius: "4px",
      color: palette.info.main,
      width: 63,
      height: 22,
      fontSize: 12,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "16px",
      "& .MuiChip-label": {
        padding: 0,
      },
    },

    firstNumber: {
      bgcolor: "#FFE8DA",
      borderRadius: "4px",
      color: palette.error.main,
      width: 22,
      height: 22,
      fontSize: 12,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "16px",
      "& .MuiChip-label": {
        padding: 0,
      },
    },
    secondNumber: {
      bgcolor: "#FEF4DE",
      borderRadius: "4px",
      color: palette.warning.main,
      width: 22,
      height: 22,
      fontSize: 12,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "16px",
      "& .MuiChip-label": {
        padding: 0,
      },
    },
  };

  return (
    <AppBarStyled
      position="fixed"
      open={isDrawerOpen}
      role={"app-bar"}
      sx={styles.appBar}
    >
      <>
        <Container disableGutters maxWidth="xl">
          <Toolbar>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton disableFocusRipple size="small">
                <ExpandMoreOutlinedIcon color="disabled" />
              </IconButton>
              <IconButton disableFocusRipple size="small">
                <CreatorSVG iconName={"Start"} color={palette.primary.main} />
              </IconButton>
              <StyledTypography
                fontSize={typography.fontSize}
                fontWeight={typography.fontWeightMedium}
                lineHeight="18px"
                color={palette.text.primary}
              >
                New Contract
              </StyledTypography>
              <Chip label="8 Schede" sx={styles.schede} />
              <Chip label="1" sx={styles.firstNumber} />
              <Chip label="2" sx={styles.secondNumber} />
              <ButtonAdd />
              <IconButton disableFocusRipple size="small">
                <MoreHorizIcon color="disabled" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
        <ProcessItemTable />
      </>

      {isCardOpen && <Card />}
    </AppBarStyled>
  );
};
