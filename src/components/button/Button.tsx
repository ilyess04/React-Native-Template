import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ title, onPress }): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
