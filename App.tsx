import { Provider } from 'react-redux';
import { store } from './src/common/redux';
import AppNavigations from './src/navigations/AppNavigations';
import { LangProvider } from './src/providers';

export default function App() {
  return (
    <Provider store={store}>
      <LangProvider>
        <AppNavigations />
      </LangProvider>
    </Provider>
  );
}