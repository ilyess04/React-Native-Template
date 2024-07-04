import { Text, TouchableOpacity } from "react-native";
import { ITextButton } from "../../../common/interfaces";
import styles from "./styles";

const TextButton = ({
  title,
  onPress,
  style,
  textStyle,
}: ITextButton): JSX.Element => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default TextButton;
