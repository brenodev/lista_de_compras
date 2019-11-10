import React from 'react';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import { Provider } from "react-redux"
import store from "./store"

import "./App.css"
import Routes from './routes';

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
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
