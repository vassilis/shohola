import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[900] },
    secondary: { main: yellow.A700 },
  },
});
const mytheme = responsiveFontSizes(theme);

export default mytheme;
