import { TextInput } from "react-native";
import { colors } from "../../../utils";
import { IInput } from "../../../common/interfaces";
import styles from "./styles";

const Input = ({
  style,
  placeholder,
  value,
  type,
  onChangeText,
}: IInput): JSX.Element => {
  return (
    <TextInput
      style={[styles.container, style]}
      placeholderTextColor={colors.gray}
      secureTextEntry={type === "password"}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
