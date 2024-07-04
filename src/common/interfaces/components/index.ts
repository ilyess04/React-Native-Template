import { StyleProp, TextStyle } from "react-native";

interface IInput {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: "password" | "text";
}
export type { IInput };
