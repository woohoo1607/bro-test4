import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '500px',
    alignItems: 'center',
  },
  input: {
    width: '200px',
  },
  inputText: {
    textAlign: 'center',
  },
  button: {
    maxWidth: '100px',
  }
}));
