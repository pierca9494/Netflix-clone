import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviesContainer: {
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));
