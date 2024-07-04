import { View } from "react-native";
import { TextButton } from "../../components";
import { useTranslation } from "../../hooks";
import { IHomeTemplate } from "../../common/interfaces";
import styles from "./styles";

const HomeTemplate = ({ onNavigateToDetailsScreen }:IHomeTemplate) => {
  const { tr } = useTranslation();
  return (
    <View style={styles.container}>
      <TextButton
        title={tr("goToDetails")}
        onPress={onNavigateToDetailsScreen}
      />
    </View>
  );
};
export default HomeTemplate;
