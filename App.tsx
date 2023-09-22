import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/common/redux';
import AppRoutes from './src/routes/AppRoutes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <AppRoutes isDarkMode={isDarkMode} />
    </Provider>
  );
}

export default App;
