import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { APP_ROUTES } from "../../../routes/settings";
import {
  alphanumericAccentSpecialChar,
  basicEmail,
} from "../../../utils/regex";
import users from "../../../services/users";
import { IUserRegister, IUserRegisterController } from "../../../types/users";
import { USER_SCHEMA } from "./yup";

export default function useUserRegisterController(): IUserRegisterController {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const createNewUser = (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    users
      .userRegister({
        ...userFormik.values,
      })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");

        setIsLoading(false);
        navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.code === "ERR_NETWORK") {
          return toast.error("Não foi possível estabelecer conexão");
        }
        const message = error.response.data.message;
        toast.error(message, {
          toastId: "NOTIFY_SERVER_ERROR",
        });
      });
  };

  const userFormik = useFormik<IUserRegister>({
    initialValues: {
      user_name: "",
      user_surname: "",
      user_email: "",
      profile: "",
    },

    validationSchema: USER_SCHEMA,
    onSubmit: createNewUser,
  });

  const nameChange = (event: any) => {
    const value = alphanumericAccentSpecialChar(event.target.value);
    userFormik.setFieldValue("user_name", value);
  };

  const surnameChange = (event: any) => {
    const value = alphanumericAccentSpecialChar(event.target.value);
    userFormik.setFieldValue("user_surname", value);
  };

  const emailChange = (event: any) => {
    const value = basicEmail(event.target.value);
    userFormik.setFieldValue("user_email", value);
  };

  const profileChange = (event: any) => {
    console.log(event.target.value);
    const selectedId = event.target.value;
    userFormik.setFieldValue("profile", selectedId);
  };

  const goToUserList = () => {
    navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);
  };

  return {
    nameChange,
    surnameChange,
    emailChange,
    profileChange,
    userFormik,
    createNewUser,
    goToUserList,
    isLoading,
  };
}
