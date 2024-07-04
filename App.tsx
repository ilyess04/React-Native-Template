import { Provider } from "react-redux";
import { store } from "./src/common/redux";
import { LangProvider } from "./src/providers";
import AppNavigations from "./src/navigations/AppNavigations";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <LangProvider>
        <AppNavigations />
      </LangProvider>
    </Provider>
  );
};
export default App;
