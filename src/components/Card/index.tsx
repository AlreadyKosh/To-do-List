import React, { useState } from "react";
import styles from "./Card.module.scss";
import { HiOutlinePencil } from "react-icons/hi";
import { PiPaintBucket } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { IconContext } from "react-icons";

import Modal from "../Modal";

interface ICard {
    title: string;
    content: string;
    initialColor: string;
}

const Card: React.FC<ICard> = (props: ICard) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        props.initialColor
    );
    const [showColorModal, setShowColorModal] = useState<boolean>(false);

    const handleColorChange = (color: string) => {
        setBackgroundColor((prevColor) => color);
        setShowColorModal(false);
    };

    return (
        <div className={`${styles.Card} ${styles[backgroundColor]}`}>
            <div className={styles.top}>
                <h2>{props.title}</h2>
                <IconContext.Provider value={{ size: "1.3em" }}>
                    <IoIosStarOutline />
                </IconContext.Provider>
            </div>
            <div>
                <p>{props.content}</p>
            </div>
            <div className={styles.bottom}>
                <IconContext.Provider value={{ size: "1.3em" }}>
                    <HiOutlinePencil className={styles.bottomIcon} />

                    <PiPaintBucket
                        className={styles.bottomIcon}
                        onClick={() => setShowColorModal(true)}
                    />
                    <RiDeleteBinLine className={styles.deleteIcon} />
                </IconContext.Provider>
            </div>
            {showColorModal && (
                <Modal
                    onClose={() => setShowColorModal(false)}
                    onSelectColor={handleColorChange}
                />
            )}
        </div>
    );
};

export default Card;
