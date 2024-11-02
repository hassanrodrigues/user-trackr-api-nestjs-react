import { useState } from "react";
import { useQuery } from "react-query";
import api from "../../../services/api";
import { itemsPerPageUsers, USERS_COLUMN } from "../../../mocks/users";
import users from "../../../services/users";
import { toast } from "react-toastify";

function useUsersController() {
  const [searchParamUsers, setSearchParamUsers] = useState<string>("");
  const [pageParamUsers, setPageParamUsers] = useState(1);
  const [totalPagesUsers, setTotalPagesUsers] = useState<number>(0);
  const [totalItemsUsers, setTotalItemsUsers] = useState(0);
  const [limitPerPageUsers, setLimitPerPageUsers] = useState(15);
  const [dataUsersList, setDataUsersList] = useState([]);

  const changeRowPerPage = (event: any) => {
    if (event && event.target) {
      const { value } = event.target;
      setLimitPerPageUsers(value);
      setPageParamUsers(1);
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      const response = await api.delete(`user/${userId}`);
      const successMessage = response.data.message || "Usuário deletado com sucesso!";
      toast.success(successMessage);
      refetch();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Erro ao deletar usuário";
      toast.error(errorMessage);
    }
  };

  const { refetch, isFetching } = useQuery(
    ["user", searchParamUsers, pageParamUsers, limitPerPageUsers],
    () => {
      return api.get(`user`, {
        params: {
          page: pageParamUsers,
          limit: limitPerPageUsers,
          sort: "DESC",
          search: searchParamUsers,
        },
      });
    },
    {
      onSuccess: (dataOnSuccess) => {
        const usersData = dataOnSuccess?.data?.items || [];
        setDataUsersList(usersData);

        setTotalPagesUsers(dataOnSuccess?.data?.meta?.totalPages || 0);
        setTotalItemsUsers(dataOnSuccess?.data?.meta?.totalItems || 0);

        if (pageParamUsers > dataOnSuccess?.data?.meta?.totalPages) {
          setPageParamUsers(dataOnSuccess?.data?.meta?.totalPages);
        }
      },
    }
  );

  const changeStatusUser = (keyId: number) => {
    if (keyId) {
      users
        .userIdStatus(keyId)
        .then((response) => {
          toast.success(response.data.message);
          refetch();
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") {
            return toast.error("Não foi possível estabelecer conexão");
          }
          const message = error.response.data.message;
          toast.error(message, {
            toastId: "NOTIFY_SERVER_ERROR",
          });
        });
    }
  };

  const tableUsers = dataUsersList?.map((item: any) => {
    return {
      id: item.user_id,
      name: item.user_name,
      email: item.user_email,
      profile: item.profile.profile_name,
      surname: item.user_surname,
      isView: true,
      isEdit: false,
      status: item.user_status,
    };
  });

  return {
    deleteUser,
    changeStatusUser,
    USERS_COLUMN,
    tableUsers,
    searchParamUsers,
    setSearchParamUsers,
    pageParamUsers,
    setPageParamUsers,
    totalPagesUsers,
    totalItemsUsers,
    limitPerPageUsers,
    changeRowPerPage,
    isFetching,
    itemsPerPageUsers,
  };
}

export default useUsersController;