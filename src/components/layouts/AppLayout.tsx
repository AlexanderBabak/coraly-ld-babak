import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Drawer } from "components/drawer/Drawer";
import { DrawerHeaderStyled } from "components/drawer/DrawerHeaderStyled";
import { pages } from "components/drawer/pages";
import { AppBar } from "components/appBar/AppBar";
import { setDrawerOpen } from "modules/process/processSlice";

const AppLayout = () => {
  const dispatch = useAppDispatch();
  const { isDrawerOpen } = useAppSelector((state) => state.pages);

  const handleDrawerOpenClose = (): void => {
    dispatch(setDrawerOpen(!isDrawerOpen));
  };

  const styles = {
    main: {
      display: "flex",
      height: "100vh",
    },
    content: {
      flexGrow: 1,
      p: 3,
      padding: 0,
      height: 60,
      position: "relative",
    },
    loader: {
      margin: "auto",
    },
  };
  return (
    <Box sx={styles.main}>
      <AppBar open={isDrawerOpen} />
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerOpenClose}
        pages={pages}
      />
      <Box sx={styles.content}>
        <DrawerHeaderStyled />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
