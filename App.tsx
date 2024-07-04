import { Provider } from "react-redux";
import { store } from "./src/common/redux";
import { DrawerProvider, LangProvider } from "./src/providers";
import { Platform, StatusBar } from "react-native";
import { colors } from "./src/utilis";
import AppNavigations from "./src/navigations/AppNavigations";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <LangProvider>
        <DrawerProvider>
          <StatusBar
            backgroundColor={colors.primary}
            barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          />
          <AppNavigations />
        </DrawerProvider>
      </LangProvider>
    </Provider>
  );
};
export default App;
