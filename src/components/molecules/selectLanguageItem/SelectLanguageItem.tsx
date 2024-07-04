import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";
import { ISelectLanguageItem } from "../../../common/interfaces";
import { FlagAvatar } from "../../atoms";
import styles from "./styles";

const SelectLanguageItem = ({
  isSelected,
  title,
  source,
  onPress,
}: ISelectLanguageItem): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? colors.secondary : colors.white,
        },
      ]}
      onPress={onPress}
    >
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <FlagAvatar source={source} />
      </View>
      <Text
        style={{
          flex: 10,
          ...styles.title,
          ...{
            color: isSelected ? colors.primary : colors.black,
          },
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default SelectLanguageItem;
