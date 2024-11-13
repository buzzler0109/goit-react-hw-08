import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Button color="inherit" component={NavLink} to="/">
        HOME
      </Button>
      {isLoggedIn && (
        <Button color="inherit" component={NavLink} to="/contacts">
          CONTACTS
        </Button>
      )}
    </>
  );
};
