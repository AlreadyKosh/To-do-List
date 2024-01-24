import React, { ReactNode, useState } from "react";
import styles from "./Modal.module.scss";

interface IModal {
    children: ReactNode;
}

const Modal = (props: IModal) => {

  return (
    <div className={styles.Modal}>
      <div className={styles.modalInfo}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;