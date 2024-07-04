import { StyleSheet } from "react-native";
import { colors } from "../../../../utils";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
export default styles;
