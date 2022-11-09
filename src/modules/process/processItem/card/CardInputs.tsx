import { InputCards, StyledTypography } from "components/reusable";
import { ContractTypeMensile } from "./ContractTypeMensile";
import { ContractTypeYear } from "./ContractTypeYear";
import {
  IconButton,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export const CardInputs = () => {
  const { typography } = useTheme();

  const styles = {
    accordion: {
      boxShadow: "none",
      marginBottom: 2,
      "&.MuiAccordion-root:before": {
        height: 0,
      },
      "&.Mui-expanded": {
        margin: 0,
        marginBottom: 0,
      },
    },
    accordionSummary: {
      bgcolor: "transparent",
      height: 50,
      borderRadius: "8px",
      "&.Mui-expanded": {
        minHeight: 50,
      },
    },
    iconButton: { marginRight: "4px" },
    accordionDetails: { paddingRight: 0, paddingLeft: 0 },
    inputCards: { paddingBottom: 0, marginTop: 1 },
    inputCards2: { paddingBottom: 0, marginTop: 2 },
  };
  return (
    <Stack>
      <InputCards label="Contract numbers" fullWidth size="small" />
      <InputCards label="Customer number" fullWidth size="small" />
      <InputCards label="Email" fullWidth size="small" />
      <ContractTypeYear />
      <InputCards label="Phone provider" fullWidth size="small" />

      <Accordion square sx={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={styles.accordionSummary}
        >
          <Stack direction="row" alignItems="center">
            <IconButton disableRipple size="small" sx={styles.iconButton}>
              <ShoppingBagOutlinedIcon color="primary" />
            </IconButton>

            <StyledTypography
              fontSize={16}
              fontWeight={typography.fontWeightMedium}
              lineHeight="24px"
              color="#5A5869"
            >
              TIM
            </StyledTypography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <InputCards
            size="small"
            label="Contract number"
            fullWidth
            sx={styles.inputCards}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion square sx={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={styles.accordionSummary}
        >
          <Stack direction="row" alignItems="center">
            <IconButton disableRipple size="small" sx={styles.iconButton}>
              <ShoppingBagOutlinedIcon color="primary" />
            </IconButton>

            <StyledTypography
              fontSize={16}
              fontWeight={typography.fontWeightMedium}
              lineHeight="24px"
              color="#5A5869"
            >
              Disney Plus
            </StyledTypography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <ContractTypeMensile />
          <InputCards
            size="small"
            label="Email"
            fullWidth
            sx={styles.inputCards}
          />

          <InputCards
            size="small"
            label="Discount"
            fullWidth
            sx={styles.inputCards2}
          />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
