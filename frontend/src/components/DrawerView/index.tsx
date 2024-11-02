import Drawer from "@mui/material/Drawer";
import { CloseBtn, DrawerBox, Header3 } from "./styles";
import { DrawerViewProps } from "./types";
import { X } from "phosphor-react";

export default function DrawerView({
  isOpen,
  setIsOpen,
  title,
  children,
  resetData,
}: DrawerViewProps) {
  
  const handleClose = () => {
    resetData();
    setIsOpen(false);
  };

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        anchor="right"
        sx={{
          transition: "width 5s ease-in-out",
          backgroundColor: "rgba(200, 200, 200, 0.1)",
          "& .MuiDrawer-paper": {
            overflow: "hidden",
            minWidth: "30vw",
            backgroundColor: "transparent",
          },
        }}
      >
        <DrawerBox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Header3>{title}</Header3>
            <CloseBtn onClick={handleClose}>
              <X />
            </CloseBtn>
          </div>

          {children}
        </DrawerBox>
      </Drawer>
    </div>
  );
}
