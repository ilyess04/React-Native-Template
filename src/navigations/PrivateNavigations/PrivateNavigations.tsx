import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../../screens";
import { useTranslation } from "../../hooks";
import HomeTabNavigations from "./homeTabNavigations/HomeTabNavigations";

const PrivateNavigations = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const { tr } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={tr("home")}
        component={HomeTabNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={tr("details")} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default PrivateNavigations;
