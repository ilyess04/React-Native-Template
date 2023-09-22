import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/common/redux';
import AppRoutes from './src/routes/AppRoutes';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoutes isDarkMode={isDarkMode} />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
