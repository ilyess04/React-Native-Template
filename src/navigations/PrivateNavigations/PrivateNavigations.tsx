import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "../../screens";
import { useTranslation } from "../../hooks";
import { ENavigationsRoute } from "../../common/enums";
import { colors } from "../../utils";
import HomeTabNavigations from "./HomeTabNavigations/HomeTabNavigations";

const Stack = createNativeStackNavigator();

const PrivateNavigations = (): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.primary,
      }}
    >
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
