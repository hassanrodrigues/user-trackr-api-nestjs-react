/* eslint-disable @typescript-eslint/no-unused-vars */
import { CSSObject, Theme } from "@mui/material/styles";

export const openedMixinItemLabel = (_theme: Theme): CSSObject => ({
    opacity: 1,

});

export const closedMixinItemLabel = (theme: Theme): CSSObject => ({
    opacity: 0,
    fontSize: 0,
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
});

export const openedMixinMenuItem = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const closedMixinMenuItem = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
});

export const openedMixinGroupLabel = (theme: Theme): CSSObject => ({
    marginLeft: "30px",

    overflow: "visible",
    textOverflow: "none",

    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

export const closedMixinGroupLabel = (theme: Theme): CSSObject => ({
    margin: "0px 12px 0px 22px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
});
