import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../../screens";
import { useTranslation } from "../../hooks";
import HomeTabNavigations from "./homeTabNavigations/HomeTabNavigations";
import { ENavigationsRoute } from "../../common/enums";

const PrivateNavigations = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const { tr } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ENavigationsRoute.homeNavigation}
        component={HomeTabNavigations}
        options={{ headerShown: false, title: tr("home") }}
      />
      <Stack.Screen
        name={ENavigationsRoute.details}
        component={DetailsScreen}
        options={{ title: tr("details") }}
      />
    </Stack.Navigator>
  );
};

export default PrivateNavigations;
