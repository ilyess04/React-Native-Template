import { Image, View } from "react-native";
import { reactNativeLogoSrc } from "../../assets";
import { Button, Input } from "../../components";
import { useTranslation } from "../../hooks";
import { ILoginTemplate } from "../../common/interfaces";
import styles from "./styles";

const LoginTemplate = ({
  state,
  onChangeState,
  onSubmit,
}: ILoginTemplate): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <View style={styles.container}>
      <Image source={reactNativeLogoSrc} style={styles.logo} />
      <View style={{ paddingHorizontal: 16, width: "100%" }}>
        <Input
          placeholder={tr("email")}
          value={state.email}
          onChangeText={(text) => onChangeState({ ...state, email: text })}
        />
        <Input
          value={state.password}
          type="password"
          placeholder={tr("password")}
          onChangeText={(text) => onChangeState({ ...state, password: text })}
        />
        <Button title={tr("login")} onPress={onSubmit} />
      </View>
    </View>
  );
};
export default LoginTemplate;
