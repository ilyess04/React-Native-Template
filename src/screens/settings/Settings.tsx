import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { setLang } from "../../common/redux";
import { useAuthentification, useLanguages, useTranslation } from "../../hooks";
import { ELang } from "../../common/enums";

function SettingsScreen() {
  const { tr } = useTranslation();
  const { logout } = useAuthentification();
  const { storedLang } = useLanguages();
  const dispatch = useDispatch();

  const handleChangeLang = (lang: ELang) => {
    if (storedLang !== lang) {
      dispatch(setLang(lang));
    }
  };
  
  return (
    <View style={styles.settingsLayoutStyle}>
      <Text>{tr("selectLang")}</Text>
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
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>{tr("logout")}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SettingsScreen;
