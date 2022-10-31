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
};

export const CreatorSVG: React.FC<Props> = ({ iconName, color }) => {
  const IconComponent = iconsMap[iconName];
  return <IconComponent color={color} />;
};
