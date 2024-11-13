import { useSelector } from "react-redux";
import { Navigation } from "../navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AuthNav } from "../authNav/AuthNav";
import { UserMenu } from "../userMenu/UserMenu";

// export const AppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <>
//       <Navigation />
// {
//   isLoggedIn ? <UserMenu /> : <AuthNav />;
// }
//     </>
//   );
// };

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DialpadIcon from "@mui/icons-material/Dialpad";

export default function ButtonAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <Navigation />
            <DialpadIcon sx={{ flexGrow: 1, textAlign: "right" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              P H O N E B O O K
            </Typography>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
