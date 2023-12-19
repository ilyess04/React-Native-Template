import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../../screens";
import { useTranslation } from "../../hooks";

const PublicNavigations = (): JSX.Element => {
  const { tr } = useTranslation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={tr("home")}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default PublicNavigations;
