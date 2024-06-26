import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/pages/Home';
import {SignIn} from './src/pages/SignIn';
import {SignUp} from './src/pages/SingUp';
import {Routes} from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
