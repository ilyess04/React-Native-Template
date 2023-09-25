import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "../../../hooks";
import { HomeScreen, SettingsScreen } from "../../../screens";
import Icon from "react-native-vector-icons/Ionicons";

const HomeTabNavigations = (): JSX.Element => {
  const { lang } = useTranslation();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="PrivateNavigations" screenOptions={{}}>
      <Tab.Screen
        name={lang.home}
        component={HomeScreen}
        options={{
          tabBarLabel: lang.home,
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={lang.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: lang.settings,
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigations;
