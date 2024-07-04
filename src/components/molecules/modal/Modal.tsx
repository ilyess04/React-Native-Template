import { IModal } from "../../../common/interfaces";
import { View } from "react-native";
import Drawer from "react-native-modal";
import styles from "./styles";

const Modal = ({
  isVisible,
  onClose,
  children,
}: IModal): JSX.Element => {
  return (
    <Drawer
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      style={styles.modalContainer}
    >
      <View style={styles.container}>{children}</View>
    </Drawer>
  );
};
export default Modal;
