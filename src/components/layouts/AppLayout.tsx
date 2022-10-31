import { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAppSelector } from "redux/reduxType";
import { Drawer } from "components/drawer/Drawer";
import { DrawerHeaderStyled } from "components/drawer/DrawerHeaderStyled";
import { pages } from "components/drawer/pages";
import { AppBar } from "components/appBar/AppBar";

const AppLayout = () => {
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

  const [open, setOpen] = useState(true);

  const { loadingPages, error, activePageName } = useAppSelector(
    (state) => state.pages
  );

  const handleDrawerOpenClose = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.main}>
      <AppBar open={open} />
      <Drawer open={open} onClose={handleDrawerOpenClose} pages={pages} />
      <Box sx={styles.content}>
        <DrawerHeaderStyled />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
