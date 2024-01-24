import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import { HiOutlinePencil } from "react-icons/hi";
import { PiPaintBucket } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";

interface ICard {
  title: string;
  content: string;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.top}>
        <h2>{props.title}</h2>
        <IoIosStarOutline className={styles.topIcon}/>

      </div>
      <div>
          <p>{props.content}</p>
      </div>
      <div className={styles.bottom}>
        <HiOutlinePencil className={styles.bottomIcon}/>
        <PiPaintBucket className={styles.bottomIcon}/>
        <RiDeleteBinLine className={styles.deleteIcon}/>
      </div>

    </div>
  );
};

export default Card;
