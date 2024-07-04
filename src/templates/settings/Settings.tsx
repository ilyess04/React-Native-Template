import { View } from "react-native";
import { useModal, useTranslation } from "../../hooks";
import { Button, ChangeLangForm, TextButton } from "../../components";
import { ISettingsTemplate } from "../../common/interfaces";
import styles from "./styles";

const SettingsTemplate = ({ onLogout }: ISettingsTemplate): JSX.Element => {
  const { tr } = useTranslation();
  const { open, close } = useModal();
  return (
    <View style={styles.settingsLayoutStyle}>
      <TextButton
        style={{ marginBottom: 10 }}
        title={tr("clickToChangeLanguage")}
        onPress={() =>
          open(
            <View style={{ padding: 16 }}>
              <ChangeLangForm onSubmit={close} />
            </View>
          )
        }
      />
      <View style={{ width: "100%", paddingHorizontal: 16 }}>
        <Button title={tr("logout")} onPress={onLogout} />
      </View>
    </View>
  );
};
export default SettingsTemplate;
