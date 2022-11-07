import React from "react";
import { StyledTypography, InputCards } from "components/reusable";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import {
  IconButton,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const AccordionContent = () => {
  const { palette, typography } = useTheme();

  const styles = {
    accordion: {
      boxShadow: "none",
      marginBottom: 2,
      "&.MuiAccordion-root:before": {
        height: 0,
      },
      "&.Mui-expanded": {
        margin: 0,
        marginBottom: 3,
      },
    },
    accordionSummary: {
      bgcolor: "#F6F8FA",
      height: 50,
      borderRadius: "8px",
      "&.Mui-expanded": {
        minHeight: 50,
      },
    },
    iconButton: { marginRight: "4px" },
    chip: {
      bgcolor: palette.primary.main,
      color: palette.grey[600],
      width: 82,
      height: 22,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "18px",
      marginRight: 1,
    },
    accordionDetails: { paddingRight: 0 },
    inputCards: { paddingBottom: 0, marginTop: 1 },
    inputCards2: { paddingBottom: 0, marginTop: 2 },
  };

  return (
    <>
      <StyledTypography
        fontSize={18}
        fontWeight={typography.fontWeightBold}
        lineHeight="27px"
        marginBottom={4}
      >
        Fields’ Phase
      </StyledTypography>
      <Accordion square sx={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={styles.accordionSummary}
        >
          <Stack direction="row" alignItems="center">
            <IconButton disableRipple size="small" sx={styles.iconButton}>
              <CreatorSVG iconName={"MacroFasi"} color={palette.primary.main} />
            </IconButton>

            <StyledTypography
              fontSize={18}
              fontWeight={typography.fontWeightBold}
              lineHeight="27px"
              color={palette.info.light}
              marginRight={40}
            >
              Phase 2
            </StyledTypography>
            <Chip label="Ready" sx={styles.chip} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <InputCards
            size="small"
            label="Contract number"
            fullWidth
            sx={styles.inputCards}
          />
          <InputCards
            size="small"
            label="Contract number 2"
            fullWidth
            sx={styles.inputCards2}
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
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <IconButton disableRipple size="small" sx={styles.iconButton}>
                  <CreatorSVG
                    iconName={"MacroFasi"}
                    color={palette.primary.main}
                  />
                </IconButton>

                <StyledTypography
                  fontSize={18}
                  fontWeight={typography.fontWeightBold}
                  lineHeight="27px"
                  color={palette.text.primary}
                >
                  New Contract
                </StyledTypography>
              </Stack>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <InputCards
            size="small"
            label="Start date"
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
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <IconButton disableRipple size="small" sx={styles.iconButton}>
                  <CreatorSVG iconName={"Start"} color={palette.primary.main} />
                </IconButton>

                <StyledTypography
                  fontSize={18}
                  fontWeight={typography.fontWeightBold}
                  lineHeight="27px"
                  color={palette.text.primary}
                >
                  Start
                </StyledTypography>
              </Stack>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <InputCards
            size="small"
            label="Start"
            fullWidth
            sx={styles.inputCards}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};
