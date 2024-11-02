import { IconButton } from "@mui/material";
import { useTheme as useThemeMui } from "@mui/material/styles";

import { useTheme as useThemeStyled } from "styled-components";

import { APP_SETTINGS } from "../configs/index";
import MenuItem from "./MenuItem";

import {
  Drawer,
  DrawerBottom,
  DrawerHeader,
  Navigator,
  Stack,
  SubTitleBottom,
  TextBottomTitle,
} from "./styles";
import { ISidebarProps } from "./types";
import ChevronDown from "../../assets/icons/ChevronDown";
import { APP_ROUTES } from "../../routes/settings";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import ChevronLeft from "../../assets/icons/ChevronLeft";

export default function Sidebar({
  open,
  handleVisibility,
  openSidebarDiagram,
  handleVisibilitySidebarDiagram,
}: Readonly<ISidebarProps>) {
  const styledTheme = useThemeStyled();
  const muiTheme = useThemeMui();

  const STACK_ONE_ITEMS = [
    {
      id: 1,
      label: "Dashboard",
      icon: <DashboardIcon />,
      icon2: <DashboardIcon />,
      path: APP_ROUTES.DASHBOARD.path,
      permissions: APP_ROUTES.DASHBOARD.permissions,
    },

    {
      id: 2,
      label: "Usuários",
      icon: <DashboardIcon />,
      icon2: <DashboardIcon />,
      path: `${APP_ROUTES.USERS.path}/${APP_ROUTES.USERS.LIST.path}`,
      permissions: APP_ROUTES.USERS.permissions,
    },
  ];

  const stackOnePermissions = STACK_ONE_ITEMS.flatMap(
    (item) => item.permissions
  );

  const MENU_ITEMS = [
    {
      id: "STACK_ONE",
      items: STACK_ONE_ITEMS,
      permissions: Array.from(new Set(stackOnePermissions)),
    },
  ];

  return (
    <>
      <Drawer
        id="sideBarMain"
        variant="permanent"
        open={open}
        styled_theme={styledTheme}
      >
        <DrawerHeader open={open} styled_theme={styledTheme}>
          {/* <Logotype
            src={open ? LOGOTYPE : CLOSELOGO}
            styled_theme={styledTheme}
            open={open}
          /> */}
          <IconButton
            onClick={handleVisibility}
            style={{
              background: "#F2F2F2",
              left: open ? "10%" : "77%",
              top: "20%",
              boxShadow: "0px 3px 6px #00000029",
              width: 36,
              height: 36,
            }}
          >
            {open && <ChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <>
          <Navigator>
            {MENU_ITEMS?.map((option) => {
              return (
                <Stack key={option.id}>
                  <MenuItem
                    items={option.items}
                    open={open}
                    styled_theme={styledTheme}
                  />
                </Stack>
              );
            })}
          </Navigator>
          <DrawerBottom open={open} styled_theme={styledTheme}>
            <TextBottomTitle open={open} styled_theme={styledTheme}>
              © User Management
            </TextBottomTitle>
            <SubTitleBottom open={open}>Hassan Rodrigues</SubTitleBottom>
            <SubTitleBottom open={open}>Powered by Hassan</SubTitleBottom>
            <SubTitleBottom className="version" open={open}>
              V {APP_SETTINGS.project_version}
            </SubTitleBottom>
          </DrawerBottom>
        </>
      </Drawer>

      <Drawer
        id="sideBarSecond"
        variant="permanent"
        open={openSidebarDiagram}
        styled_theme={styledTheme}
        hidden={true}
      >
        <DrawerHeader styled_theme={styledTheme}>
          <p style={{ color: "red" }}>Diagrama</p>
          <IconButton onClick={handleVisibilitySidebarDiagram}>
            {muiTheme.direction === "rtl" && <ChevronDown />}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </>
  );
}
