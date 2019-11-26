import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[900] },
    secondary: { main: grey[900] },
  },
});
const mytheme = responsiveFontSizes(theme);

export default mytheme;
