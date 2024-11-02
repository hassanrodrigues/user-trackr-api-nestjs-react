import {
  LineDivider,
  Page,
  PageActions,
  PageTitle,
  Row,
  SectionForm,
  SubTitle,
} from "../../../components";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { APP_ROUTES } from "../../../routes/settings";
import InputMain from "../../../components/InputMain";
import SelectMain from "../../../components/SelectMain";
import { TYPE_USERS } from "../../../mocks/users";
import useUserEditController from "./useUsersEditController";
import Button from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/Modal";
import {
  SubTitleModalCancel,
  TitleModalCancel,
} from "../../../components/DrawerView/styles";
import { useQuery } from "react-query";
import { getUserEditId } from "../../../services/users";

function UsersEdit() {
  const {
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
  } = useUserEditController();

  const { keyId } = useParams();
  const navigate = useNavigate();

  useQuery(
    ["getEditUsers", keyId],
    () => {
      if (keyId) {
        return getUserEditId(keyId);
      }
    },
    {
      onSuccess: (dataOnSuccess) => {
        if (dataOnSuccess) {
          userEditFormik.setValues({
            ...userEditFormik.values,
            user_name: dataOnSuccess?.data?.user_name ?? "-",
            user_surname: dataOnSuccess?.data?.user_surname ?? "-",
            profile: dataOnSuccess?.data?.profile.profile_identifier ?? "-",
            user_email: dataOnSuccess?.data?.user_email ?? "-",
          });
        }
      },
      enabled: !!keyId,
    }
  );

  const iconUsersList = () => {
    navigate(`/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`);
  };

  const BREADCRUMBS_USERS_REGISTER = [
    {
      name: APP_ROUTES.USERS.title,
      path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
    },
    {
      name: "Editar Usuário",
      path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.REGISTER.path}`,
    },
  ];

  return (
    <Page>

      <Modal isOpen={openCancelEdit} onClose={closeModalEdit} width="350px">
        <div>
          <TitleModalCancel>Deseja Cancelar ?</TitleModalCancel>
          <SubTitleModalCancel>
            Os dados inseridos não serão salvos
          </SubTitleModalCancel>
        </div>

        <PageActions justify="center">
          <Button
            value="Não"
            color="inherit"
            variant="outlined"
            width="100px"
            height="45px"
            onClick={closeModalEdit}
          />
          <Button value={"Sim"} width="100px" height="45px" color="info" onClick={OutEdit} />
        </PageActions>
      </Modal>

      <Breadcrumbs links={BREADCRUMBS_USERS_REGISTER} />
      <div style={{ display: "flex" }}>
        <div onClick={iconUsersList} style={{ cursor: "pointer" }}>
          {/* <ArrowIcon /> */}
        </div>

        <PageTitle>Edição de Usuários</PageTitle>
      </div>

      <SectionForm>
        <Row>
          <SubTitle>Dados do Usuário</SubTitle>
          <LineDivider />
        </Row>
        <Row>
          <InputMain
            id="user_name"
            name="user_name"
            label={"Nome Completo*"}
            placeholder={"Insira o nome completo*"}
            type="text"
            full_width
            variant="outlined"
            value={userEditFormik.values.user_name}
            onChange={nameEditChange}
            onBlur={userEditFormik.handleBlur}
            error={
              userEditFormik?.touched?.user_name &&
              Boolean(userEditFormik?.errors.user_name)
            }
            helpertext={
              userEditFormik?.errors?.user_name
                ? userEditFormik?.errors?.user_name
                : "• Mín. 5 Caracteres | • Máx. 40 Caracteres"
            }
          />

          <InputMain
            id="user_surname"
            name="user_surname"
            label={"Sobrenome*"}
            placeholder={"Sobrenome*"}
            type="text"
            full_width
            variant="outlined"
            value={userEditFormik.values.user_surname}
            onChange={surnameEditChange}
            onBlur={userEditFormik?.handleBlur}
            error={
              userEditFormik?.touched?.user_surname &&
              Boolean(userEditFormik?.errors.user_surname)
            }
          />
        </Row>

        <Row>
          <InputMain
            id="user_email"
            name="user_email"
            label={"E-mail"}
            placeholder={"Insira o email"}
            type="text"
            full_width
            variant="outlined"
            value={userEditFormik.values.user_email}
            onChange={emailEditChange}
            onBlur={userEditFormik?.handleBlur}
            error={
              userEditFormik?.touched?.user_email &&
              Boolean(userEditFormik?.errors.user_email)
            }
          />

          <SelectMain
            id="user_profile"
            name="user_profile"
            label={"Perfil"}
            fullwidth
            options={TYPE_USERS}
            value={userEditFormik.values.profile}
            onChange={profileEditChange}
          />
        </Row>

        <PageActions justify="end">
          <Button
            value="Cancelar"
            variant="outlined"
            width="139px"
            color="inherit"
            onClick={openModalEdit}
          />
          <Button
            value={isLoading ? "" : "Atualizar"}
            width="139px"
            color="info"
            onClick={editUser}
            isFetching={isLoading}
          />
        </PageActions>
      </SectionForm>
    </Page>
  );
}

export default UsersEdit;