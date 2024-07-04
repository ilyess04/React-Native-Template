import { Text, TouchableOpacity } from "react-native";
import { IButton } from "../../../common/interfaces";
import styles from "./styles";

const Button = ({ style, title, onPress }: IButton): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
