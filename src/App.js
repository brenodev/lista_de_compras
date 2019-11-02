import React from 'react';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

import "./App.css"
import Header from './common/Header';
import Home from './home';

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
        <Header/>
        <Home/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
