import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButtonWrapper } from "./IconButtonWrapper";

const iconCollection = [
  <ShoppingBagOutlinedIcon />,
  <SearchOutlinedIcon />,
  <UploadFileOutlinedIcon />,
  <TaskOutlinedIcon />,
  <SettingsOutlinedIcon />,
];

export const IconButtonGroup = () => {
  return (
    <>
      {iconCollection.map((icon, index) => (
        <IconButtonWrapper key={index}>{icon}</IconButtonWrapper>
      ))}
    </>
  );
};
