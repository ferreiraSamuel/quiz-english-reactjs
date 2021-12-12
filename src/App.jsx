import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Routes from './routes';
import quizTheme from './theme/theme';
import '@fontsource/roboto';
import Context from './Context';


function App() {
  const [questionsByApi, setQuestionsByApi] = React.useState([]);
  return (
    <Context.Provider value={[questionsByApi, setQuestionsByApi]}>
      <ThemeProvider theme={quizTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
