import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../utils";

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 20,
    overflow: "hidden",
    minHeight: Dimensions.get("screen").height * 0.25,
    maxHeight: Dimensions.get("screen").height * 0.9,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
export default styles;
