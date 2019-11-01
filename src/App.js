import React from 'react';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import "./App.css"

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
    <AppBar position="static" color="primary">
        <div className="header">
          <p className="title">Lista de compras</p>
        </div>
    </AppBar>
      <div className="App">
        <h1>APP</h1>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
