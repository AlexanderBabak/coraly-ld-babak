import { Box } from "@mui/system";
import { StyledBox } from "components/reusable";
import { Logo } from "assets/Logo";

type Props = {
  banner: string;
  maxWidth: string;
  children: JSX.Element;
};

export const LoginLayout: React.FC<Props> = ({
  banner,
  children,
  maxWidth,
}) => {
  return (
    <StyledBox
      maxWidth={1400}
      justifyContent="space-between"
      alignItems="flex-start"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        padding={8}
        maxWidth={maxWidth}
        marginTop={25}
      >
        <Box position="fixed" top={100}>
          <Logo />
        </Box>

        <Box>{children}</Box>
      </Box>
      <Box
        component="img"
        src={banner}
        sx={{
          height: "100vh",
        }}
      />
    </StyledBox>
  );
};
