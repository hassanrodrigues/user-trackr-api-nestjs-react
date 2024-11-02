/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CardHeader,
  CardLogo,
  ContainerLogin,
  Content,
  Description,
  LoginSide,
  Logo,
  Row,
  Title,
} from "./styles";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ChangeEvent, useEffect, useState } from "react";

import { useFormik } from "formik";
import Button from "../../components/Button";
import { SIGN_IN_SCHEMA } from "./yup";
import "animate.css";
import { useNavigate } from "react-router-dom";
import InputBorder from "../../components/Input/InputWithBorder";
import { IUserSignIn } from "../../models/user/IUser";
import { useGlobalContext } from "../../contexts/AuthProvider/useGlobalContext";
import KeyIcon from "../../assets/icons/Key";

export default function SignIn() {
  const initValuesSignIn: IUserSignIn = {
    username: "",
    password: "",
  };

  const {
    loginMutation,
    accessToken,
    isError,
    setIsError,
    isSuccess,
    isAuthenticated,
  } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(false);
    }, 2000);
  }, []);

  const signInFormik = useFormik({
    initialValues: initValuesSignIn,
    validationSchema: SIGN_IN_SCHEMA,

    onSubmit: (values) => {
      login(values);
    },
  });

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    signInFormik?.setFieldValue(e.target.name, e.target?.value);
  };



  const login = (user: IUserSignIn) => {
    loginMutation(user);
  };
  useEffect(() => {
    if (isError) {

      setIsError(false);
    }

    if (isSuccess) {
      if (accessToken && isAuthenticated()) {
        navigate("/dashboard");
      }
    }
  }, [isError, isSuccess, accessToken]);
  return (
    <ContainerLogin>
      <Content>
        <CardLogo>
          <Logo
            className="animate__animated animate__fadeInUp"
          />
        </CardLogo>
        <LoginSide
          hidden={showLogin}
          className="animate__animated animate__fadeInRight"
        >
          <CardHeader>
            <Title>Bem Vindo! </Title>
            <Description>Entre com sua conta</Description>

            <div
              style={{
                width: "100%",
                gap: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Row>
                <InputBorder
                  id="username"
                  name="username"
                  label="E-mail"
                  value={signInFormik.values.username}
                  onChange={onChangeValue}
                  error={Boolean(signInFormik?.errors?.username)}
                  helperText={signInFormik.errors.username}
                />
              </Row>
              <Row>
                <InputBorder
                  id="password"
                  name="password"
                  iconPosition="end"
                  label="Password*"
                  hasIcon={true}
                  iconStart={<KeyIcon />}
                  value={signInFormik.values.password}
                  onChange={onChangeValue}
                  iconAction={handleClickShowPassword}
                  icon={showPassword ? <VisibilityOff /> : <Visibility />}
                  type={showPassword ? "text" : "password"}
                  onKeyDown={(e: any) => {
                    if (
                      e.key === "Enter" &&
                      signInFormik.isValid &&
                      signInFormik.dirty
                    ) {
                      signInFormik.handleSubmit();
                    }
                  }}
                />
              </Row>
            </div>
            <Row top="32px">
              <Button
                value="Entrar"
                disabled={!signInFormik.isValid || !signInFormik.dirty}
                onClick={() => signInFormik.handleSubmit()}
                sx={{ backgroundColor: "#1A3E5C", color: "#FFFFFF" }}

              />
            </Row>
          </CardHeader>

        </LoginSide>
      </Content>
    </ContainerLogin>
  );
}
