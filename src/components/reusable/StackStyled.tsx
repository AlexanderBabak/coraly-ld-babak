import { Stack, styled } from "@mui/material";
import { StackProps as MuiStackProps } from "@mui/material/Stack";
import { CSSObject } from "@mui/material/styles";

interface StackProps extends MuiStackProps {
  justifyContent?: string;
  alignItems?: string;
}

export const StackStyled = styled(Stack)<StackProps>(
  ({ justifyContent, alignItems = "center" }): CSSObject => ({
    flexDirection: "row",
    alignItems: alignItems,
    justifyContent: justifyContent,
  })
) as typeof Stack;
