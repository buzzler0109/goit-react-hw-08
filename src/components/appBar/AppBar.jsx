import { useSelector } from "react-redux";
import { Navigation } from "../navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AuthNav } from "../authNav/AuthNav";
import { UserMenu } from "../userMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
