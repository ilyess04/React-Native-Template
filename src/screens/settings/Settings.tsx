import { View } from "react-native";
import { useAuthentification, useTranslation } from "../../hooks";
import { Button } from "../../components";
import styles from "./styles";

const SettingsScreen = (): JSX.Element => {
  const { tr } = useTranslation();
  const { logout } = useAuthentification();

  return (
    <View style={styles.settingsLayoutStyle}>
      <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <Button title={tr("logout")} onPress={logout} />
      </View>
    </View>
  );
};
export default SettingsScreen;
