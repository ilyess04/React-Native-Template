import { useState } from "react";
import { ILoginState } from "../../common/interfaces";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { useAuthentification } from "../../hooks";
import { LoginTemplate } from "../../templates";

const LoginScreen = (): JSX.Element => {
  const { setCredentials } = useAuthentification();
  const [state, setState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleSubmit = () => {
    setCredentials("accessToken", "refreshToken", 1);
  };

  return (
    <LoginTemplate
      state={state}
      onChangeState={setState}
      onSubmit={handleSubmit}
    />
  );
};
export default LoginScreen;
