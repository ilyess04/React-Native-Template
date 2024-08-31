import { ReactNode, useState } from "react";
import { Modal } from "../../components";
import { ModalContext } from "../../common/contexts";

export default function ModalProvider(props: any): JSX.Element {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [children, setChildren] = useState<ReactNode | undefined>(undefined);
  return (
    <ModalContext.Provider
      value={{
        open: (children) => {
          setIsOpenDrawer(true);
          setChildren(children);
        },
        close: () => setIsOpenDrawer(false),
      }}
    >
      {props.children}
      <Modal
        isVisible={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        {children}
      </Modal>
    </ModalContext.Provider>
  );
}
