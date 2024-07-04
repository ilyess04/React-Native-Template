import { View } from "react-native";
import { useTranslation } from "../../hooks";
import { TextButton } from "../../components";
import styles from "./styles";

const HomeScreen = ({ navigation }): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <View style={styles.container}>
      <TextButton
        title={tr("goToDetails")}
        onPress={() => navigation.navigate(tr("details"))}
      />
    </View>
  );
};
export default HomeScreen;
