import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButtonWrapper } from "./IconButtonWrapper";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { setCardOpen } from "modules/process/processSlice";

const iconCollection = [
  <ShoppingBagOutlinedIcon />,
  <SearchOutlinedIcon />,
  <UploadFileOutlinedIcon />,
  <TaskOutlinedIcon />,
];

export const IconButtonGroup = () => {
  const dispatch = useAppDispatch();
  const { isCardOpen } = useAppSelector((state) => state.pages);

  return (
    <>
      {iconCollection.map((icon, index) => (
        <IconButtonWrapper key={index}>{icon}</IconButtonWrapper>
      ))}
      <IconButtonWrapper>
        <SettingsOutlinedIcon
          onClick={() => dispatch(setCardOpen(!isCardOpen))}
        />
      </IconButtonWrapper>
    </>
  );
};
