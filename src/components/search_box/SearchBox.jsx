import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.scss";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.search}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "350px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </Box>
    </div>
  );
}
