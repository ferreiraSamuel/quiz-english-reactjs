import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import quizTheme from './theme/theme';
import '@fontsource/roboto';

function App() {
  return (
    <ThemeProvider theme={quizTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
