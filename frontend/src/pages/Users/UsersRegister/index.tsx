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
import useUserRegisterController from "./useUsersRegisterController";
import Button from "../../../components/Button";

function UsersRegister() {
  const {
    nameChange,
    surnameChange,
    emailChange,
    profileChange,
    userFormik,
    createNewUser,
    goToUserList,
    isLoading,
  } = useUserRegisterController();

  const BREADCRUMBS_USERS_REGISTER = [
    {
      name: APP_ROUTES.USERS.title,
      path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
    },
    {
      name: "Cadastro de Usuários",
      path: `/${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.REGISTER.path}`,
    },
  ];

  return (
    <Page>
      <Breadcrumbs links={BREADCRUMBS_USERS_REGISTER} />
      <PageTitle>Cadastro de Usuários</PageTitle>

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
            value={userFormik.values.user_name}
            onChange={nameChange}
            onBlur={userFormik.handleBlur}
            error={
              userFormik?.touched?.user_name &&
              Boolean(userFormik?.errors.user_name)
            }
            helpertext={
              userFormik?.errors?.user_name
                ? userFormik?.errors?.user_name
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
            value={userFormik.values.user_surname}
            onChange={surnameChange}
            onBlur={userFormik?.handleBlur}
            error={
              userFormik?.touched?.user_surname &&
              Boolean(userFormik?.errors.user_surname)
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
            value={userFormik.values.user_email}
            onChange={emailChange}
            onBlur={userFormik?.handleBlur}
            error={
              userFormik?.touched?.user_email &&
              Boolean(userFormik?.errors.user_email)
            }
          />

          <SelectMain
            id="user_profile"
            name="user_profile"
            label={"Perfil"}
            fullwidth
            options={TYPE_USERS}
            value={userFormik.values.user_profile}
            onChange={profileChange}
          />
        </Row>

        <PageActions justify="end">
          <Button
            value="Cancelar"
            variant="outlined"
            width="139px"
            onClick={goToUserList}
          />
          <Button
            value={isLoading ? "" : "Salvar"}
            width="139px"
            onClick={createNewUser}
            isFetching={isLoading}
            disabled={isLoading || !userFormik?.isValid || !userFormik?.dirty}
          />
        </PageActions>
      </SectionForm>
    </Page>
  );
}

export default UsersRegister;
