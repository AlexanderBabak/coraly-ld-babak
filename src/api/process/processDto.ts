export interface ICard {
  isPrivate: boolean;
  icon: string;
  id: number;
  title: string;
  backgroundColor: string;
  data?: ICardData[];
}

export interface ICardData {
  code: string;
  name: string;
  phoneNumber: string;
  serie: string;
  venditore: string;
  date: string;
}

export interface IPage {
  name: string;
  displayName: string;
  path: string;
  iconName: string;
}

export interface ITableData {
  code: string;
  name: string;
  phoneNumber: string;
  serie: string;
  venditore: string;
  date: string;
}
