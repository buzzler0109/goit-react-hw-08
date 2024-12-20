import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularColor = () => {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  );
};
