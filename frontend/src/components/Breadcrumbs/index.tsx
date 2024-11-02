import { ThemeProvider } from "@mui/material";
import { Breadcrumb } from "./styles";
import { MUI_DEFAULT_THEME } from "../../styles/muiTheme";
import { Link } from "react-router-dom";
import STYLED_THEME from "../../styles/theme";

interface IBreadcrumbs {
    links: any;
}

export default function Breadcrumbs({ links }: IBreadcrumbs) {

    return (
        <ThemeProvider theme={MUI_DEFAULT_THEME}>
            <Breadcrumb separator="›">
                {links?.map((link: any, index: any) => (
                    <Link
                        to={link?.path}
                        key={link?.path}
                        style={{
                            textDecoration: "none",
                            color:
                                index === links?.length - 1
                                    ? STYLED_THEME.color.default.dark
                                    : STYLED_THEME.color.text.default.dark,
                            fontWeight:
                                index === links?.length - 1
                                    ? "bold"
                                    : STYLED_THEME.font.family,
                        }}
                    >
                        {link?.name}
                    </Link>
                ))}
            </Breadcrumb>
        </ThemeProvider>
    );
}
