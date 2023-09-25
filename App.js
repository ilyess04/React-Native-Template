import { Provider } from 'react-redux';
import AppNavigations from './src/navigations/AppNavigations';
import { store } from './src/common/redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
}