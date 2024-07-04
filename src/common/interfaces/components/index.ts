import { StyleProp, TextStyle, ViewStyle } from "react-native";

interface IButton {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?: () => void;
}
interface IInput {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: "password" | "text";
}

export type { IButton, IInput };
