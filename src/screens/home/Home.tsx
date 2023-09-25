import { Text, View, Button } from "react-native";
import styles from "./styles";
import { useTranslation } from "../../hooks";

function HomeScreen({ navigation }) {
  const { lang } = useTranslation();
  return (
    <View style={styles.homeLayoutStyle}>
      <Text>{lang.home}</Text>
      <Button
        title={lang.goToDetails}
        onPress={() => navigation.navigate(lang.details)}
      />
    </View>
  );
}
export default HomeScreen;
