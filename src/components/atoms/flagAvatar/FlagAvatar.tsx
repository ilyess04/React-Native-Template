import { Image, View } from "react-native";
import { IFlagAvatar } from "../../../common/interfaces";

const FlagAvatar = ({ style, source }: IFlagAvatar): JSX.Element => {
  return (
    <View
      style={[
        {
          width: 25,
          height: 25,
          borderRadius: 12.5,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Image
        source={source}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};
export default FlagAvatar;
