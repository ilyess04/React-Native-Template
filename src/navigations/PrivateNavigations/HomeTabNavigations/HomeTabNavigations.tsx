import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "../../../hooks";
import { HomeScreen, SettingsScreen } from "../../../screens";
import { ENavigationsRoute } from "../../../common/enums";
import { colors } from "../../../utils";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeTabNavigations = (): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.secondary },
      }}
    >
      <Tab.Screen
        name={ENavigationsRoute.home}
        component={HomeScreen}
        options={{
          tabBarLabel: tr("home"),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ENavigationsRoute.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: tr("settings"),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigations;
