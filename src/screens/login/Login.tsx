import { ReactNativeLogoSrc } from "../../assets";
import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { View, Image } from "react-native";
import { useAuthentification, useTranslation } from "../../hooks";
import { Button, Input } from "../../components";
import styles from "./styles";

const LoginScreen = (): JSX.Element => {
  const { tr } = useTranslation();
  const { setCredentials } = useAuthentification();
  const [state, setState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleSubmit = () => {
    setCredentials("accessToken", "refreshToken", 1);
  };

  return (
    <View style={styles.container}>
      <Image source={ReactNativeLogoSrc} style={styles.logo} />
      <View style={{ paddingHorizontal: 16, width: "100%" }}>
        <Input
          placeholder={tr("email")}
          value={state.email}
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <Input
          value={state.password}
          type="password"
          placeholder={tr("password")}
          onChangeText={(text) => setState({ ...state, password: text })}
        />
        <Button title={tr("login")} onPress={handleSubmit} />
      </View>
    </View>
  );
};
export default LoginScreen;
