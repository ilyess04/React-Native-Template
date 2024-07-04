import { Text, View, TouchableOpacity } from "react-native";
import { useAuthentification, useLanguages, useTranslation } from "../../hooks";
import { ELang } from "../../common/enums";
import styles from "./styles";

const SettingsScreen = (): JSX.Element => {
  const { tr } = useTranslation();
  const { logout } = useAuthentification();
  const { changeLang } = useLanguages();

  return (
    <View style={styles.settingsLayoutStyle}>
      <Text>{tr("selectLang")}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLang(ELang.fr)}
      >
        <Text style={styles.buttonText}>{ELang.fr}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLang(ELang.en)}
      >
        <Text style={styles.buttonText}>{ELang.en}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>{tr("logout")}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SettingsScreen;
