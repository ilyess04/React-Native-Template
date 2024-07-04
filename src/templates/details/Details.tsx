import { View } from "react-native";
import { TextButton } from "../../components";
import { useTranslation } from "../../hooks";
import styles from "./styles";
import { IDetailsTemplate } from "../../common/interfaces";

const DetailsTemplate = ({ onGoBack }: IDetailsTemplate): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <View style={styles.container}>
      <TextButton title={tr("returnToHome")} onPress={onGoBack} />
    </View>
  );
};
export default DetailsTemplate;
