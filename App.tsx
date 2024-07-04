import { Provider } from "react-redux";
import { store } from "./src/common/redux";
import { LangProvider } from "./src/providers";
import { Platform, StatusBar } from "react-native";
import { colors } from "./src/utilis";
import AppNavigations from "./src/navigations/AppNavigations";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <LangProvider>
        <StatusBar
          backgroundColor={colors.primary}
          barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        />
        <AppNavigations />
      </LangProvider>
    </Provider>
  );
};
export default App;
