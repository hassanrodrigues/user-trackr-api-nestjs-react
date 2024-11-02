import {
  concatPermissions,
  PermissionGroupEnum,
} from "../models/Profile/IProfile";

export enum PermissionAction {
  Create = "create",
  View = "view",
  Edit = "edit",
  Active = "active",
}
const allPermissionsAction = Object.values(PermissionAction);
export const APP_ROUTES = {
  APP_ROOT: {
    path: "USER MANAGEMENT",
    title: "USER MANAGEMENT",
  },
  SIGNIN: {
    path: "sign-in",
    title: "Acesso USER MANAGEMENT",
  },
  DASHBOARD: {
    path: "dashboard",
    title: "Dashboard",
    permissions: concatPermissions(
      [PermissionGroupEnum.DASHBOARD.name],
      allPermissionsAction
    ),
  },
  USERS: {
    path: "users",
    title: "Usuários",
    LIST: {
      path: "list",
    },
    REGISTER: {
      path: "register",
    },
    permissions: concatPermissions(
      [PermissionGroupEnum.USERS.name],
      allPermissionsAction
    ),
  },
};
