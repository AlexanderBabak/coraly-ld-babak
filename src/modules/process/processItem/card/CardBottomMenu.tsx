import { StyledButton } from "components/reusable";
import { IconButton, Stack } from "@mui/material";
import { useAppDispatch } from "redux/reduxType";
import { setCardOpen } from "modules/process/processSlice";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

export const CardBottomMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <IconButton>
          <KeyboardArrowLeftOutlinedIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightOutlinedIcon />
        </IconButton>
      </Stack>
      <Stack flexDirection="row" justifyContent="flex-end">
        <StyledButton
          text="Annula"
          fullWidth={false}
          variant="outlined"
          onClick={() => dispatch(setCardOpen(false))}
        ></StyledButton>
        <StyledButton
          text="Crea"
          fullWidth={false}
          marginleft="16px"
          color="secondary"
          disableElevation={true}
          onClick={() => console.log("Create Process!")}
        ></StyledButton>
      </Stack>
    </Stack>
  );
};
