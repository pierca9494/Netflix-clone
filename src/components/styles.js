import { makeStyles } from "@mui/styles";

const drawerWidth = 240; // Definiamo la larghezza della Sidebar

export default makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex", // Assicura un layout affiancato
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
    marginLeft: drawerWidth, // Aggiungi un margine sinistro per compensare la Sidebar
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0, // Rimuovi il margine sui dispositivi mobili
    },
  },
}));
