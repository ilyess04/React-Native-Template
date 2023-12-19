import { NavigationContainer } from "@react-navigation/native";
import { useAuthentification } from "../hooks";
import PrivateNavigations from "./PrivateNavigations/PrivateNavigations";
import PublicNavigations from "./PublicNavigations/PublicNavigations";

const AppNavigations = (): JSX.Element => {
  const auth = useAuthentification();
  return (
    <NavigationContainer>
      {auth.accessToken ? <PrivateNavigations /> : <PublicNavigations />}
    </NavigationContainer>
  );
};
export default AppNavigations;
