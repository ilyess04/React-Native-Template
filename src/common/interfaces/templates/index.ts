interface ISettingsTemplate {
  onLogout: () => void;
}
interface IHomeTemplate {
  onNavigateToDetailsScreen: () => void;
}
interface IDetailsTemplate {
  onGoBack: () => void;
}
export type { ISettingsTemplate, IHomeTemplate, IDetailsTemplate };
