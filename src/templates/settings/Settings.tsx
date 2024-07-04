import { View } from "react-native";
import { useTranslation } from "../../hooks";
import { Button } from "../../components";
import { ISettingsTemplate } from "../../common/interfaces";
import styles from "./styles";

const SettingsTemplate = ({ onLogout }: ISettingsTemplate): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <View style={styles.settingsLayoutStyle}>
      <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <Button title={tr("logout")} onPress={onLogout} />
      </View>
    </View>
  );
};
export default SettingsTemplate;
