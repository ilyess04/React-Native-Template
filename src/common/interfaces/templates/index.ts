import { ILoginState } from "../states";

interface ISettingsTemplate {
  onLogout: () => void;
}
interface IHomeTemplate {
  onNavigateToDetailsScreen: () => void;
}
interface IDetailsTemplate {
  onGoBack: () => void;
}
interface ILoginTemplate {
  state: ILoginState;
  onChangeState: React.Dispatch<React.SetStateAction<ILoginState>>;
  onSubmit: () => void;
}
export type {
  ISettingsTemplate,
  IHomeTemplate,
  IDetailsTemplate,
  ILoginTemplate,
};
