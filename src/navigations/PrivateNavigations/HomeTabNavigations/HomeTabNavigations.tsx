import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "../../../hooks";
import { HomeScreen, SettingsScreen } from "../../../screens";
import Icon from "react-native-vector-icons/Ionicons";

const HomeTabNavigations = (): JSX.Element => {
  const { tr } = useTranslation();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="PrivateNavigations" screenOptions={{}}>
      <Tab.Screen
        name={tr("home")}
        component={HomeScreen}
        options={{
          tabBarLabel: tr("home"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={tr("settings")}
        component={SettingsScreen}
        options={{
          tabBarLabel: tr("settings"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigations;
