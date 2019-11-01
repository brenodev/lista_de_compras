import React from 'react';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#834bff',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <h1>APP</h1>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
