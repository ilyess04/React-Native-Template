import { View, Text, Button } from "react-native";
import { useTranslation } from "../../hooks";
import styles from "./styles";

const DetailsScreen = ({ navigation }): JSX.Element => {
  const { lang } = useTranslation();
  return (
    <View style={styles.detailsLayoutStyle}>
      <Text>{lang.details}</Text>
      <Button title={lang.returnToHome} onPress={() => navigation.goBack()} />
    </View>
  );
};
export default DetailsScreen;
