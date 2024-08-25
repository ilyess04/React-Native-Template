import { IModal } from "../../../common/interfaces";
import React, { useRef } from "react";
import {
  Modal,
  View,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";

const ANIMATION_DURATION = 300;

const CustomModal = ({
  isVisible,
  onClose,
  children,
}: IModal): JSX.Element => {
  const animation = useRef(new Animated.Value(-ANIMATION_DURATION)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: isVisible ? 0 : -ANIMATION_DURATION,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          onClose();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.container,
              {
                transform: [
                  { translateY: animation },
                  ...pan.getTranslateTransform(),
                ],
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <View style={styles.headerItem} />
            </View>
            {children}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
