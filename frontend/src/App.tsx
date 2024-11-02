
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as ThemeStyledProvider } from "styled-components";
import { ThemeProvider as ThemeMuiProvider } from "@mui/material";
//import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthProvider";
import GlobalStyles from "./styles/global";
import { Router } from "./routes";
import STYLED_THEME from "./styles/theme";
import { MUI_DEFAULT_THEME } from "./styles/muiTheme";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeStyledProvider theme={STYLED_THEME}>
          <ThemeMuiProvider theme={MUI_DEFAULT_THEME}>
            <AuthProvider>
              <>
                <GlobalStyles />
                <Router />
              </>
            </AuthProvider>
          </ThemeMuiProvider>
        </ThemeStyledProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
