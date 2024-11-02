import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../../routes/settings";
import {
  alphanumericAccentSpecialChar,
  basicEmail,
} from "../../../utils/regex";
import users from "../../../services/users";
import { IUserEdit, IUserEditController } from "../../../types/users";
import { USER_SCHEMA } from "./yup";

export default function useUserEditController(): IUserEditController {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openCancelEdit, setOpenCancelEdit] = useState(false);
  const navigate = useNavigate();
  const { keyId } = useParams();

  const editUser = () => {
    setIsLoading(true);

    if (keyId) {
      users
        .userIdEdit(keyId, {
          ...userEditFormik.values,
        })

        .then((response) => {
          toast.success(response.data.message);

          setIsLoading(false);
          navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);
        })
        .catch((error) => {
          setIsLoading(false);

          if (error.code === "ERR_NETWORK") {
            return toast.error("Não foi possível estabelecer conexão");
          }

          const messageEditArray = error.response.data.message;
          const message = Array.isArray(messageEditArray)
            ? messageEditArray[0]
            : messageEditArray;

          toast.error(message, {
            toastId: "NOTIFY_SERVER_ERROR",
          });
        });
    }
  };

  const userEditFormik = useFormik<IUserEdit>({
    initialValues: {
      user_name: "",
      user_surname: "",
      user_email: "",
      profile: "urs",
    },

    validationSchema: USER_SCHEMA,
    onSubmit: editUser,
  });

  const nameEditChange = (event: any) => {
    const value = alphanumericAccentSpecialChar(event.target.value);
    userEditFormik.setFieldValue("user_name", value);
  };

  const surnameEditChange = (event: any) => {
    const value = alphanumericAccentSpecialChar(event.target.value);
    userEditFormik.setFieldValue("user_surname", value);
  };

  const emailEditChange = (event: any) => {
    const value = basicEmail(event.target.value);
    userEditFormik.setFieldValue("user_email", value);
  };

  const profileEditChange = (event: any) => {
    const selectedId = event.target.value;
    userEditFormik.setFieldValue("user_profile", selectedId);
  };

  const OutEdit = () => {
    navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);
  };

  const openModalEdit = () => {
    setOpenCancelEdit(true);
  };

  const closeModalEdit = () => {
    setOpenCancelEdit(false);
  };

  return {
    nameEditChange,
    surnameEditChange,
    emailEditChange,
    profileEditChange,
    userEditFormik,
    editUser,
    OutEdit,
    isLoading,
    openCancelEdit,
    openModalEdit,
    closeModalEdit,
  };
}
