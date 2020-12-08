import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    color: "#3248c9",
  },
  p: {
    fontWeight: "bold",
  },
  time: {
    fontWeight: "normal",
    fontStyle: "italic",
  },
}));
