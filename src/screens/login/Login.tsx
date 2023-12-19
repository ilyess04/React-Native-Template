import { ReactNativeLogoSrc } from "../../publics";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../common/redux";
import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useTranslation } from "../../hooks";

function LoginScreen() {
  const { tr } = useTranslation();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleLogin = () => {
    dispatch(
      setCredentials({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        user: { fullName: "test", email: loginState.email },
      })
    );
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
