import { Box, Grid } from "@mui/material";
import ReactDOM from "react-dom";

import {
  ActionsModal,
  CardModal,
  ContentModal,
  DescriptionModal,
  Header,
  HeaderModal,
  IconClose,
  Overlay,
  TextStrong,
  TitleModal,
} from "./styles";

import Button from "../Button";
import { X } from "react-feather";
import { IModalProps } from "./types";

function Modal({
  isOpen,
  title,
  description,
  strong,
  actions,
  children,
  width,
  secondWidth,
  height,
  onClose,
  closeIcon,
  closeModal,
  enableScroll,
  justifyTitle,
  justifyActions,
  padding,
}: IModalProps) {
  const inOverlay = document.getElementById("modal")!;

  return ReactDOM.createPortal(
    <Overlay open={isOpen} onClose={onClose} maxWidth="xl">
      {closeModal ? (
        <Header closeModal={closeModal}>
          {closeModal && (
            <div
              className="custom-icon"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "absolute",
                top: -22,
                right: 13,
              }}
            >
              <IconClose onClick={closeModal}>
                <X />
              </IconClose>
            </div>
          )}
        </Header>
      ) : (
        ""
      )}
      <CardModal
        width={width}
        height={height}
        scroll={enableScroll}
        secondWidth={secondWidth}
      >
        {title || description || closeIcon ? (
          <>
            {closeIcon ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "-20px",
                  color: "#656C80",
                }}
              >
                <IconClose onClick={onClose}>
                  <X />
                </IconClose>
              </div>
            ) : null}
            <HeaderModal>
              <Box>
                <TitleModal justify={justifyTitle}>{title}</TitleModal>
                {description ? (
                  <DescriptionModal justify={justifyTitle}>
                    {description}
                    <TextStrong>{strong}</TextStrong>
                  </DescriptionModal>
                ) : null}
              </Box>
            </HeaderModal>
          </>
        ) :
          null}

        <ContentModal padding={padding}>
          {children}

          {actions ? (
            <>
              <Grid />

              <ActionsModal justify={justifyActions}>
                {actions?.map((action: any) => (
                  <Button
                    disabled={action?.isValidForm}
                    value={action?.value}
                    onClick={action?.function}
                    isFetching={action?.isFetching}
                    variant={action?.style}
                    color={action?.color}
                    width={action?.size}
                    key={action?.value}
                  />
                ))}
              </ActionsModal>
            </>
          ) : null}
        </ContentModal>
      </CardModal>
    </Overlay>,
    inOverlay
  );
}

export default Modal;
