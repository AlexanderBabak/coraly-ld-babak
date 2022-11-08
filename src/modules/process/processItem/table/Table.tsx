import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";

//data должна фечиться с сервера!!!
import { data } from "./data";

export const ProcessItemTable = () => {
  const { palette } = useTheme();

  const styles = {
    tableContainer: { boxShadow: "none" },
    row: {
      "& td, & th": {
        borderTop: "1px solid #EAEAEC",
        borderRight: "2px solid #EAEAEC",
        lineHeight: "18px",
        padding: "9px 6px",
      },
    },
    cellOne: { width: 64 },
    cellTwo: { width: 310 },
    avatar: {
      width: 24,
      height: 24,
      backgroundColor: palette.info.main,
      fontSize: 8,
      marginRight: 1,
    },
  };
  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.serie} sx={styles.row}>
              <TableCell
                component="th"
                scope="row"
                sx={styles.cellOne}
              ></TableCell>
              <TableCell align="left"> {user.code}</TableCell>
              <TableCell align="left" sx={styles.cellTwo}>
                {user.name}
              </TableCell>
              <TableCell align="left">{user.phoneNumber}</TableCell>
              <TableCell align="left">{user.serie}</TableCell>
              <TableCell>
                <Stack flexDirection="row" alignItems="center">
                  <Avatar sx={styles.avatar}>PL</Avatar>
                  {user.venditore}
                </Stack>
              </TableCell>

              <TableCell align="left">{user.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
