import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CreatorSVG } from "components/сreatorSVG/CreatorSVG";
import { StyledTypography } from "components/reusable";
import { useTheme } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { ICard } from "api/process/processDto";
import { Link } from "react-router-dom";

export const ProcessCard: React.FC<ICard> = ({
  isPrivate,
  icon,
  id,
  title,
  backgroundColor,
}) => {
  const { palette, typography } = useTheme();

  const style = {
    card: {
      width: 150,
      height: 150,
      backgroundColor: backgroundColor,
      boxShadow: "none",
      borderRadius: 2,
    },
    cardActionArea: {
      padding: "13px",
      height: "100%",
    },
    link: { textDecoration: "none" },
    lockOutlinedIcon: { width: 16, color: "#fff" },
    moreVertOutlinedIcon: { width: 16, color: "#fff" },
  };

  return (
    <Tooltip
      title="This is a private process "
      arrow
      placement="top-start"
      disableHoverListener={!isPrivate}
    >
      <Link to="/processi/process1" style={style.link}>
        <Card sx={style.card} onClick={() => {}}>
          <CardActionArea sx={style.cardActionArea}>
            <Stack
              direction="row"
              justifyContent="space-between"
              visibility={!isPrivate ? "hidden" : "visible"}
            >
              <LockOutlinedIcon sx={style.lockOutlinedIcon} />
              <MoreVertOutlinedIcon sx={style.moreVertOutlinedIcon} />
            </Stack>

            <Stack alignItems="center" spacing={1} height="100%" paddingTop={1}>
              <CreatorSVG iconName={icon} />
              <StyledTypography
                fontSize={16}
                fontWeight={typography.fontWeightMedium}
                color={palette.common.white}
                lineHeight="24px"
              >
                {title} {id}
              </StyledTypography>
            </Stack>
          </CardActionArea>
        </Card>
      </Link>
    </Tooltip>
  );
};
