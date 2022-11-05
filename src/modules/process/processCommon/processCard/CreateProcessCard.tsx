import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Stack } from "@mui/material";
import { StyledTypography } from "components/reusable";
import { useTheme } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

type Props = {
  handleOpen: () => void;
};

export const CreateProcessCard: React.FC<Props> = ({ handleOpen }) => {
  const { typography } = useTheme();

  const styles = {
    card: {
      width: 150,
      height: 150,
      boxShadow: "none",
      borderRadius: 2,
      backgroundColor: "transparent",
      border: "1px dashed",
      borderColor: "#D6D5D9",
    },
    icon: { color: "#6F6D7B" },
  };

  return (
    <Card sx={styles.card} onClick={handleOpen}>
      <CardActionArea
        sx={{
          padding: "13px",
          height: "100%",
        }}
      >
        <Stack
          alignItems="center"
          spacing={1}
          height="100%"
          paddingTop={1}
          textAlign="center"
        >
          <AddOutlinedIcon sx={styles.icon} fontSize="large" />
          <StyledTypography
            fontSize={16}
            fontWeight={typography.fontWeightMedium}
            color="#6F6D7B"
            lineHeight="24px"
          >
            Create a new process
          </StyledTypography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
