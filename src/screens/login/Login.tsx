import { ReactNativeLogoSrc } from "../../assets";
import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { View, TextInput, Image } from "react-native";
import { useAuthentification, useTranslation } from "../../hooks";
import styles from "./styles";
import { Button } from "../../components";
import { colors } from "../../utilis";

const LoginScreen = (): JSX.Element => {
  const { tr } = useTranslation();
  const { setCredentials } = useAuthentification();
  const [state, setState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleLogin = () => {
    setCredentials("accessToken", "refreshToken", 1);
  };

  return (
    <View style={styles.container}>
      <Image source={ReactNativeLogoSrc} style={styles.logo} />
      <View style={{ paddingHorizontal: 16, width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray}
          placeholder={tr("email")}
          value={state.email}
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={tr("password")}
          secureTextEntry
          value={state.password}
          onChangeText={(text) => setState({ ...state, password: text })}
        />
        <Button title={tr("login")} onPress={handleLogin} />
      </View>
    </View>
  );
};
export default LoginScreen;
