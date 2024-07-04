import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../../screens";
import { useTranslation } from "../../hooks";
import { ENavigationsRoute } from "../../common/enums";
import { colors } from "../../utils";

const PublicNavigations = (): JSX.Element => {
  const { tr } = useTranslation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: colors.secondary } }}
    >
      <Stack.Screen
        name={ENavigationsRoute.login}
        component={LoginScreen}
        options={{ headerShown: false, title: tr("login") }}
      />
    </Stack.Navigator>
  );
};
export default PublicNavigations;
