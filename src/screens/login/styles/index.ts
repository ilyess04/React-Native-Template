import { StyleSheet } from "react-native";
import { colors } from "../../../utilis";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:"100%"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width:"100%",
    height: 40,
    borderColor: colors.gray,
    borderRadius:5,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }
});
export default styles;
