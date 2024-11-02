import { useState } from "react";
import { CircularProgress } from "@mui/material";
import DrawerView from "../../../components/DrawerView";
import { useQuery } from "react-query";
import { getUserById } from "../../../services/users";
import { IUsersTableRow } from "../../../types/users";
import { IUsersAllProps } from "./types";
import {
  Body1,
  Body2,
  ButtonClose,
  InfoBox,
  SubTitleDrawerBox,
  Wrapper,
} from "../../../components/DrawerView/styles";
import { LineDivider, Row } from "../../../components";
import dayjs from "dayjs";
import Button from "../../../components/Button";

export default function ViewUsers({
  isOpen,
  setIsOpen,
  keyId,
  setKeyId,
  title,
}: IUsersAllProps) {
  const [users, setUsers] = useState<IUsersTableRow | null>(null);

  useQuery(
    ["getViewUsers", keyId],
    () => {
      if (keyId) {
        return getUserById(keyId);
      }
    },
    {
      onSuccess: (dataOnSuccess) => {
        const dataPests = {
          user_name: dataOnSuccess?.data?.user_name ?? "-",
          user_surname: dataOnSuccess?.data?.user_surname ?? "-",
          user_profile: dataOnSuccess?.data?.profile.profile_name ?? "-",
          user_email: dataOnSuccess?.data?.user_email ?? "-",
          created_at: dataOnSuccess?.data?.user_created_at
            ? dayjs(dataOnSuccess?.data.user_created_at).format("DD/MM/YYYY")
            : "-",
          updated_at: dataOnSuccess?.data?.user_updated_at
            ? dayjs(dataOnSuccess?.data.user_updated_at).format("DD/MM/YYYY")
            : "-",
        };
        setUsers(dataPests);
      },
      enabled: !!keyId,
    }
  );

  function resetData() {
    setUsers(null);
    if (setKeyId) {
      setKeyId(null);
    }
  }

  const closeDrawerView = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <DrawerView
      isOpen={isOpen ?? false}
      setIsOpen={setIsOpen ?? (() => { })}
      title={title ? title : "Usuário"}
      resetData={resetData}
    >
      {users ? (
        <Wrapper $justify={"space-between"}>
          <Row>
            <SubTitleDrawerBox>Dados do Usuário</SubTitleDrawerBox>
            <LineDivider />
          </Row>

          <Row>
            <InfoBox>
              <Body1>Nome</Body1>
              <Body2>{users?.user_name}</Body2>
            </InfoBox>

            <InfoBox>
              <Body1>Perfil</Body1>
              <Body2>{users?.user_profile}</Body2>
            </InfoBox>

            <InfoBox>
              <Body1>Sobrenome</Body1>
              <Body2>{users?.user_surname}</Body2>
            </InfoBox>
          </Row>

          <InfoBox>
            <Body1>E-mail</Body1>
            <Body2>{users?.user_email}</Body2>
          </InfoBox>

          <Row>
            <SubTitleDrawerBox>Detalhes</SubTitleDrawerBox>
            <LineDivider />
          </Row>

          <Row>
            <InfoBox>
              <Body1>Data de criação</Body1>
              <Body2>{users?.created_at}</Body2>
            </InfoBox>

            <InfoBox>
              <Body1>Última edição</Body1>
              <Body2>{users?.updated_at}</Body2>
            </InfoBox>
          </Row>

          <ButtonClose>
            <Button
              value="Fechar"
              variant="outlined"
              width="100%"
              onClick={closeDrawerView}
              color="info"
            />
          </ButtonClose>
        </Wrapper>
      ) : (
        <Wrapper>
          <CircularProgress
            sx={{
              color: "#F78601",
            }}
          />
        </Wrapper>
      )}
    </DrawerView>
  );
}
