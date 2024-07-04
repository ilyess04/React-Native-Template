import { useAuthentification } from "../../hooks";
import { SettingsTemplate } from "../../templates";

const SettingsScreen = (): JSX.Element => {
  const { logout } = useAuthentification();
  return <SettingsTemplate onLogout={logout} />;
};
export default SettingsScreen;
