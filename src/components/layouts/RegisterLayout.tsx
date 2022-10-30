import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { StyledBox } from "components/reusable";
import { Logo } from "assets/Logo";
import BannerRegister from "assets/BannerRegister.png";

export const RegisterLayout = () => {
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
        maxWidth={"400px"}
        marginTop={25}
      >
        <Box position="fixed" top={100}>
          <Logo />
        </Box>

        <Outlet />
      </Box>
      <Box
        component="img"
        src={BannerRegister}
        sx={{
          height: "100vh",
        }}
      />
    </StyledBox>
  );
};
