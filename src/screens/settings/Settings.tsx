import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { resetCredentials, setLang } from "../../common/redux";
import { useTranslation } from "../../hooks";
import { ELang } from "../../common/enums";

function SettingsScreen() {
  const { storedLang, lang } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetCredentials());
  };
  const handleChangeLang = (lang: ELang) => {
    if (storedLang !== lang) {
      dispatch(setLang(lang));
    }
  };
  return (
    <View style={styles.settingsLayoutStyle}>
      <Text>{lang.selectLang}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangeLang(ELang.fr)}
      >
        <Text style={styles.buttonText}>{ELang.fr}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangeLang(ELang.en)}
      >
        <Text style={styles.buttonText}>{ELang.en}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>{lang.logout}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SettingsScreen;
