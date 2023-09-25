interface ILayout {
  isDarkMode?: boolean;
  lang: IKeys;
}
interface IKeys {
  [key: string]: string;
}
export type { ILayout, IKeys };
