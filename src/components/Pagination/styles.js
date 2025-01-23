import { makeStyles } from "@mui/styles";

const drawerWidth = 240; // Definiamo la larghezza della Sidebar

export default makeStyles((theme) => ({
  container: {
    display: "flex", // Assicura un layout affiancato
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "30px 2px",
  },
  pageNumber: {
    margin: "0 20px !important",
    color: theme.palette.text.primary,
  },
}));
