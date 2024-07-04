import { ReactNode } from "react";
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

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
interface ITextButton {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  onPress?: () => void;
}
interface IModal {
  isVisible: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

interface IChangeLangForm {
  onSubmit: () => void;
}
interface ISelectLanguageItem {
  isSelected: boolean;
  title: string;
  source: ImageSourcePropType;
  onPress?: () => void;
}

interface IFlagAvatar {
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
}

export type {
  IButton,
  IInput,
  ITextButton,
  IModal,
  IChangeLangForm,
  ISelectLanguageItem,
  IFlagAvatar,
};
