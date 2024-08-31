import { Provider } from "react-redux";
import { store } from "./src/common/redux";
import { ModalProvider, LangProvider } from "./src/providers";
import { Platform, StatusBar } from "react-native";
import { colors } from "./src/utils";
import AppNavigations from "./src/navigations/AppNavigations";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <LangProvider>
        <ModalProvider>
          <StatusBar
            backgroundColor={colors.primary}
            barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          />
          <AppNavigations />
        </ModalProvider>
      </LangProvider>
    </Provider>
  );
};
export default App;
