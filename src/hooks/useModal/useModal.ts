import { useContext } from "react";
import { ModalContext } from "../../common/contexts";

const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};
export default useModal;
