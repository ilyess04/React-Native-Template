import { ReactNativeLogoSrc } from "../../publics";
import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useAuthentification, useTranslation } from "../../hooks";
import styles from "./styles";

function LoginScreen() {
  const { tr } = useTranslation();
  const { setCredentials } = useAuthentification();
  const [loginState, setLoginState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleLogin = () => {
    setCredentials("accessToken", "refreshToken", 1);
  };

  return (
    <View style={styles.container}>
      <Image source={ReactNativeLogoSrc} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder={tr("email")}
        value={loginState.email}
        onChangeText={(text) => setLoginState({ ...loginState, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder={tr("password")}
        secureTextEntry
        value={loginState.password}
        onChangeText={(text) =>
          setLoginState({ ...loginState, password: text })
        }
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{tr("reduxMe")}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;
