import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../utils";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 20,
    overflow: "hidden",
    minHeight: Dimensions.get("screen").height * 0.15,
    maxHeight: Dimensions.get("screen").height * 0.9,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  headerItem: {
    height: 5,
    borderRadius: 8,
    width: 85,
    backgroundColor: colors.primary,
  },
});
export default styles;
