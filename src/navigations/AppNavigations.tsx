import { NavigationContainer } from "@react-navigation/native";
import { useAuthentification } from "../hooks";
import PrivateNavigations from "./PrivateNavigations/PrivateNavigations";
import PublicNavigations from "./PublicNavigations/PublicNavigations";

const AppNavigations = (): JSX.Element => {
  const { accessToken, refreshToken, userId } = useAuthentification();
  return (
    <NavigationContainer>
      {accessToken && refreshToken && userId ? (
        <PrivateNavigations />
      ) : (
        <PublicNavigations />
      )}
    </NavigationContainer>
  );
};
export default AppNavigations;
