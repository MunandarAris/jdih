import { Button, Flex, Modal } from "antd";

import { colorsTheme } from "@/constants/colors";

import styles from "./BaseModal.module.css";

const BaseModal = ({ open, onClose, cancelButtonAttribute, submitButtonAttribute, children, title }) => {
  return (
    <Modal open={open} title={title} onCancel={onClose} footer={null}>
      {children}
      <Flex justify="end">
        <Flex align="center" gap={8}>
          <Button color="default" variant="text" onClick={cancelButtonAttribute?.onClick} className={styles.cancelButtonColor}>
            {cancelButtonAttribute?.label}
          </Button>
          <Button color="secondary" variant="solid" onClick={submitButtonAttribute?.onClick} disabled={submitButtonAttribute?.disabled} style={{ backgroundColor: colorsTheme.secondary }} loading={submitButtonAttribute?.loading}>
            {submitButtonAttribute?.label}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default BaseModal;
