import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button, Typography } from "@mui/material";
import css from "./UserMenu.module.css";
import TransitionsModal from "../Modal";
import { useState } from "react";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={css.wrap}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 3,
          textAlign: "left",
          alignItems: "center",
          paddingRight: 10,
        }}
      >
        Hello, {user.name}
      </Typography>
      <Button color="inherit" onClick={() => setIsModalOpen(true)}>
        LOGOUT
      </Button>

      {isModalOpen && (
        <TransitionsModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => dispatch(logOut())} // Функция выхода из аккаунта
        />
      )}
    </div>
  );
};
