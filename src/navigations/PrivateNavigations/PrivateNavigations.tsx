import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ILayout } from "../../common/interfaces";
import HomeTabNavigations from "./HomeTabNavigations/HomeTabNavigations";
import { DetailsScreen } from "../../screens";

const PrivateNavigations = ({ lang }: ILayout): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={lang.home}
        component={HomeTabNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={lang.details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default PrivateNavigations;
