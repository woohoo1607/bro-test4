import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    width: "500px",
    alignItems: "center",
  },
  input: {
    width: "300px",
    color: "#3248c9",
  },
  timer: {
    width: "200px",
    height: "200px",
    textAlign: "center",
    lineHeight: "200px",
    border: "2px solid #f5f5f5",
    borderRadius: "50%",
    boxShadow: "0px 3px 4px 1px #bbb",
    margin: "20px 0",
    fontSize: "20px",
    color: "#3248c9",
    fontWeight: "bold",
  },
  button: {
    maxWidth: "100px",
    color: "#3248c9",
  },
}));
