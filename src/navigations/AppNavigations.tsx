import { NavigationContainer } from "@react-navigation/native";
import { useAuthentification, useTranslation } from "../hooks";
import PrivateNavigations from "./PrivateNavigations/PrivateNavigations";
import PublicNavigations from "./PublicNavigations/PublicNavigations";

const AppNavigations = (): JSX.Element => {
  const { lang } = useTranslation();
  const auth = useAuthentification();
  return (
    <NavigationContainer>
      {auth.accessToken ? (
        <PrivateNavigations lang={lang} />
      ) : (
        <PublicNavigations lang={lang} />
      )}
    </NavigationContainer>
  );
};
export default AppNavigations;
