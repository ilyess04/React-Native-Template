import { View, Button } from "react-native";
import { useTranslation } from "../../hooks";
import styles from "./styles";

const DetailsScreen = ({ navigation }): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <View style={styles.detailsLayoutStyle}>
      <Button title={tr("returnToHome")} onPress={() => navigation.goBack()} />
    </View>
  );
};
export default DetailsScreen;
