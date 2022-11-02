import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { StyledTypography } from "components/reusable";
import { useTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const isPrivate = true;

export const ProcessCard = () => {
  const { palette, typography } = useTheme();

  return (
    <Tooltip title="This is a private process " arrow placement="top-start">
      <Card
        sx={{
          width: 150,
          height: 150,
          backgroundColor: "#47BDFF",
          boxShadow: "none",
          borderRadius: 2,
        }}
      >
        <CardActionArea
          sx={{
            padding: "13px",
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            visibility={!isPrivate ? "hidden" : "visible"}
          >
            <LockOutlinedIcon sx={{ width: 16, color: "#fff" }} />
            <MoreVertOutlinedIcon sx={{ width: 16, color: "#fff" }} />
          </Stack>

          <Stack alignItems="center" spacing={1} height="100%" paddingTop={1}>
            <CreatorSVG iconName="Board" />
            <StyledTypography
              fontSize={16}
              fontWeight={typography.fontWeightMedium}
              color={palette.common.white}
              lineHeight="24px"
            >
              Process 1
            </StyledTypography>
          </Stack>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};
