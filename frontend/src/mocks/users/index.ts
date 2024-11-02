import { ITableHeader } from "../../components/Tables/types";

export const USERS_COLUMN: ITableHeader[] = [
  {
    key: "name",
    value: "Nome",
    columnWidth: "25%",
    leftBody: true,
  },
  {
    key: "surname",
    value: "Sobrenome",
    columnWidth: "25%",
    leftBody: true,
  },
  {
    key: "profile",
    value: "Perfil",
    columnWidth: "25%",
    leftBody: true,
  },
  {
    key: "email",
    value: "E-mail",
    columnWidth: "25%",
    leftBody: true,
  },
];

export const itemsPerPageUsers = [
  {
    name: "15",
    value: 15,
  },
  {
    name: "20",
    value: 20,
  },
  {
    name: "30",
    value: 30,
  },
  {
    name: "50",
    value: 50,
  },
  {
    name: "100",
    value: 100,
  },
];


export const TYPE_USERS = [
  {
    name: "Adiministrador",
    value: "adm",
  },
  {
    name: "Usuário Comum",
    value: "usr",
  },
 
];
