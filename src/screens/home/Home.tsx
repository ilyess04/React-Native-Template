import { Text, View, Button } from "react-native";
import styles from "./styles";
import { useTranslation } from "../../hooks";

function HomeScreen({ navigation }) {
  const { tr } = useTranslation();
  return (
    <View style={styles.homeLayoutStyle}>
      <Text>{tr("home")}</Text>
      <Button
        title={tr("goToDetails")}
        onPress={() => navigation.navigate(tr("details"))}
      />
    </View>
  );
}
export default HomeScreen;
