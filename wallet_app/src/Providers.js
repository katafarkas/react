import { AuthContextProvider } from "./hooks/useAuth";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { purple } from '@mui/material/colors';


export default function Providers({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
        },
    });
    return (
        <AuthContextProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AuthContextProvider>
    )
}