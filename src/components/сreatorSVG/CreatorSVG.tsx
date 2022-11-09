import React from "react";

import ProcessiIcon from "assets/icons/ProcessiIcon";
import TeamIcon from "assets/icons/TeamIcon";
import ModelliIcon from "assets/icons/ModelliIcon";
import DatabaseIcon from "assets/icons/DatabaseIcon";
import MacroFasiIcon from "assets/icons/MacroFasiIcon";
import AutomazioniIcon from "assets/icons/AutomazioniIcon";
import VenditoriIcon from "assets/icons/VenditoriIcon";
import SupportoIcon from "assets/icons/SupportoIcon";
import LogoutIcon from "assets/icons/LogoutIcon";
import MenuIcon from "assets/icons/MenuIcon";
import BoardIcon from "assets/icons/BoardIcon";
import CartIcon from "assets/icons/CartIcon";
import StartIcon from "assets/icons/StartIcon";

type Props = {
  iconName: string;
  color?: string;
};

export const iconsMap: Record<string, any> = {
  Processi: ProcessiIcon,
  Team: TeamIcon,
  Modelli: ModelliIcon,
  Database: DatabaseIcon,
  MacroFasi: MacroFasiIcon,
  Automazioni: AutomazioniIcon,
  Venditori: VenditoriIcon,
  Supporto: SupportoIcon,
  Logout: LogoutIcon,
  Menu: MenuIcon,
  Board: BoardIcon,
  Cart: CartIcon,
  Start: StartIcon,
};

export const CreatorSVG: React.FC<Props> = ({ iconName, color }) => {
  const IconComponent = iconsMap[iconName];
  return <IconComponent color={color} />;
};
