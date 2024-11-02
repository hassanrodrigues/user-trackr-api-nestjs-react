import React from "react";
import { Navigate } from "react-router-dom";

const getUserPermissions = (): number[] => {
  const value = localStorage.getItem("user");
  const user = value ? JSON.parse(value) : {};
  const permissions = user.transactions;

  return Array.isArray(permissions) ? permissions : [];
};

interface ProtectedRouteProps {
  requiredPermissions: number[];
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredPermissions,
  children,
}) => {
  const userPermissions = getUserPermissions();

  const hasPermission = requiredPermissions.some((permission) =>
    userPermissions.includes(permission)
  );

  return hasPermission ? children : <Navigate to="/acess_denied" replace />;
};
export default ProtectedRoute;
