export interface header{
  id: number;
  name: string;
  initials: string;
  designation: string;
  shortDescription: string;
  icons: string;
  isDelete: boolean | null;
}
export interface DisplayIcon {
  iconClass: string;
  name: string;
}