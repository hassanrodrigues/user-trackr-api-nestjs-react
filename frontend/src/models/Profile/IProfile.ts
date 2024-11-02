export interface IShowPermission {
    id: number;
    name: string;
  }
  
  export interface IShowPermissionGroup {
    id: number;
    name: string;
    label: string;
    all: boolean;
    createId: number;
    viewId: number;
    editId: number;
    activeId: number;
  }
  
  export interface ICreateProfile {
    name: string;
    permissionIds: number[];
  }
  
  export interface IShowProfile {
    id: number;
    name: string;
    permissions: IShowPermission[];
    createdAt: Date;
    updated: Date;
    active: boolean;
  }
  interface IPageable {
    pageNumber: number;
    pageSize: number;
  }
  
  export interface IRequestProfileDataParams {
    search?: string | null;
    active?: boolean | null;
    page?: number | null;
    size?: number | null;
  }
  
  export interface IResponseProfile {
    items: IShowProfile[];
    pageable?: IPageable;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
  }
  
  export enum PermissionAction {
    Create = 'create',
    View = 'view',
    Edit = 'edit',
    Active = 'active'
  }
  const allPermissionsAction = Object.values(PermissionAction);
  export const PermissionGroupEnum = {

    DASHBOARD: {
      name: 'dashboard',
      label: 'Dashboard',
      actions:allPermissionsAction
    },
    USERS: {
      name: 'users',
      label: 'Usuários',
      actions:allPermissionsAction
    },
  
    trocarDepois: { name: 'dashboard', label: 'Dashboard' }
  } as const;
  
  export const concatPermissions = (
    groups: string[],
    actions: PermissionAction[]
  ): string[] => {
    return groups.flatMap((group) =>
      actions.map((action) => `${group}-${action}`)
    );
  };
  