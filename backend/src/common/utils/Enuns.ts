export enum VerifyCredentials {
  verifyUsername = 'username',
  verifyPassword = 'password',
}
const ADMIN_TRANSACTION = 'Administrador';
const DEFAULT_TRANSACTION = 'Usuario Comum';

export const UserPermissions = {
  CREATE: [ADMIN_TRANSACTION],
  FIND_ALL: [ADMIN_TRANSACTION, DEFAULT_TRANSACTION],
};
