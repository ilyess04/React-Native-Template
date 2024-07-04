import { NavigationContainer } from "@react-navigation/native";
import { useAuthentification } from "../hooks";
import PrivateNavigations from "./privateNavigations/PrivateNavigations";
import PublicNavigations from "./publicNavigations/PublicNavigations";

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
