import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  headCell: {
    color: "#a49e9e",
  },
  bodyCell: {
    color: "#3248c9",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "170px",
  },
  bodyRow: {
    backgroundColor: "#eaf6ff",
    fontWeight: "bold",
  },
}));
