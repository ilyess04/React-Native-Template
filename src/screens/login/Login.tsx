import { ReactNativeLogoSrc } from "../../assets";
import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useAuthentification, useTranslation } from "../../hooks";
import styles from "./styles";

function LoginScreen() {
  const { tr } = useTranslation();
  const { setCredentials } = useAuthentification();
  const [state, setState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleLogin = () => {
    setCredentials("accessToken", "refreshToken", 1);
  };

  return (
    <View style={styles.container}>
      <Image source={ReactNativeLogoSrc} style={styles.logo} />
      <TextInput
        style={styles.input}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{tr("login")}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;
