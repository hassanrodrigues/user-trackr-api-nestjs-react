import { Page, PageActions, PageHeader, PageTitle } from "../../../components";
import TableList from "../../../components/Tables/TableList";
import { Search } from "../../../components/Search";
import Button from "../../../components/Button";
import { PlusCircle } from "react-feather";
import useUsersController from "./useUsersListController";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/settings";
import ViewUsers from "../ViewUsers";
import { useState, useEffect } from "react";
import { IdUser, ISelectedOptions } from "../../../types/users";
import { getLocalStorage } from '../../../utils/local-storage.utils';

function UsersList() {
  const {
    deleteUser,
    changeStatusUser,
    USERS_COLUMN,
    tableUsers,
    setSearchParamUsers,
    pageParamUsers,
    setPageParamUsers,
    totalPagesUsers,
    totalItemsUsers,
    limitPerPageUsers,
    changeRowPerPage,
    isFetching,
    itemsPerPageUsers,
  } = useUsersController();

  const [isViewUser, setIsViewUser] = useState<boolean>(false);
  const [viewUserData, setViewUserData] = useState<ISelectedOptions | null>(null);
  const [userRole, setUserRole] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    const role = getLocalStorage<any>('user')?.profile;
    setUserRole(role);
  }, []);

  const userRegister = () => {
    navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.REGISTER.path}`);
  };

  function usersViewDrawer(item: ISelectedOptions) {
    setIsViewUser(true);
    setViewUserData(item);
  }

  const changeStatus = (userIDData: IdUser) => {
    if (userIDData) {
      changeStatusUser(userIDData?.id);
    }
  };

  const handleEdit = (val: any) => {
    navigate(`/users/edit/${val?.id}`);
  };

  return (
    <Page>
      <ViewUsers
        isOpen={isViewUser}
        setIsOpen={setIsViewUser}
        keyId={viewUserData?.id}
        setKeyId={setViewUserData}
      />
      <PageTitle>Usuários</PageTitle>

      <div style={{ width: "100%", display: "flex" }}>
        <PageActions>
          <Search
            message={"Pesquisa"}
            onSearch={(value) => {
              setSearchParamUsers(value);
              setPageParamUsers(1);
            }}
            inputWidth={"256px"}
          />
        </PageActions>

        <PageHeader
          direction="row"
          justify="space-between"
          align="center"
          width="100%"
        >
          <Button
            icon={<PlusCircle />}
            value={"Cadastrar usuário"}
            color="info"
            onClick={userRegister}
            disabled={userRole !== "Administrador"}
          />
        </PageHeader>
      </div>

      <div style={{ width: "100%" }}>
        <TableList
          onDelete={(user: any) => deleteUser(user.id)}
          isAdmin={userRole === "Administrador"}
          headers={USERS_COLUMN}
          data={tableUsers}
          enableActions
          onDetail={usersViewDrawer}
          onEdit={handleEdit}
          onSwitch={changeStatus}
          currentPage={pageParamUsers}
          setCurrentPage={setPageParamUsers}
          loading={isFetching}
          totalItems={totalItemsUsers}
          total={totalPagesUsers}
          limitPerPage={limitPerPageUsers}
          changeRowPerPage={changeRowPerPage}
          permissionView={true}
          isLoading={isFetching}
          options={itemsPerPageUsers}
        />
      </div>
    </Page>
  );
}

export default UsersList;