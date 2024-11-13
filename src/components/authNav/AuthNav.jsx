import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <Button color="inherit" component={NavLink} to="/register">
        REGISTRATION
      </Button>
      <Button color="inherit" component={NavLink} to="/login">
        LOGIN
      </Button>
    </div>
  );
};
