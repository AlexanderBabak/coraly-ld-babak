import { AvatarGroup, useTheme } from "@mui/material";
import { AvatarGroupStyled } from "./AvatarGroupStyled";

const chars = ["PL", "CM", "FN", "LM", "ST", "PL", "CM", "FN", "LM", "ST"];

export const AvatarsGroup = () => {
  const { palette, typography } = useTheme();

  const styles = {
    avatarGroup: {
      "& .MuiAvatarGroup-avatar:first-of-type": {
        color: palette.info.main,
        fontWeight: typography.fontWeightRegular,
        fontSize: 12,
        width: 24,
        height: 24,
        lineHeight: 15,
        background: "none",
      },
    },
  };
  return (
    <AvatarGroup max={6} sx={styles.avatarGroup}>
      {chars.map((char, index) => (
        <AvatarGroupStyled key={index}>{char}</AvatarGroupStyled>
      ))}
    </AvatarGroup>
  );
};
