import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  notFound: {
    color: "#3248c9",
    width: "100%",
    height: "100vh",
  },
  title: {
    textAlign: "center",
    lineHeight: "100vh",
    margin: "0",
    fontSize: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#1ac0d7",
  },
}));
