import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import App from "../pages/App";
import Dashboard from "../pages/Dashboard";
import { APP_ROUTES } from "./settings";
import UsersList from "../pages/Users/UsersList";
import UsersRegister from "../pages/Users/UsersRegister";
import UsersEdit from "../pages/Users/UsersEdit";

export function Router() {
  return (

    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/${APP_ROUTES.SIGNIN.path}`} />}
      />
      <Route path={APP_ROUTES.SIGNIN.path} element={<SignIn />} />

      <Route element={<App />}>
        <Route path={APP_ROUTES.DASHBOARD.path} element={<Dashboard />} />

        <Route path={APP_ROUTES.USERS.path} element={<Outlet />}>
          <Route
            path=""
            element={<Navigate to={APP_ROUTES.USERS.LIST.path} />}
          />

          <Route path={APP_ROUTES.USERS.LIST.path} element={<UsersList />} />

          <Route
            path={APP_ROUTES.USERS.REGISTER.path}
            element={<UsersRegister />}
          />
          <Route path={APP_ROUTES.USERS.EDIT.path} element={<UsersEdit />} />
        </Route>
      </Route>
    </Routes>

  );
}
