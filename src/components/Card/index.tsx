import React, { useState } from "react";
import styles from "./Card.module.scss";
import { HiOutlinePencil } from "react-icons/hi";
import { PiPaintBucket } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import { updateTarefa, deleteCard } from "../../lib/api";
import Modal from "../Modal";

interface ICard {
    id: number;
    title: string;
    content: string;
    favorite: boolean;
    initialColor: string;
    onDelete: () => void;
}

const Card: React.FC<ICard> = (props: ICard) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        props.initialColor
    );
    const [showColorModal, setShowColorModal] = useState<boolean>(false);
    const [changeFavorite, setChangeFavorite] = useState<boolean>(
        props.favorite
    );

    const handleColorChange = async (color: string) => {
        try {
            await updateTarefa(
                props.id,
                props.title,
                props.content,
                props.favorite,
                color
            );
            setBackgroundColor(color);
            setShowColorModal(false);
        } catch (error) {
            console.error("Erro ao salvar a cor na API:", error);
        }
    };

    const handleFavoriteChange = async (favorite: boolean) => {
        try {
            await updateTarefa(
                props.id,
                props.title,
                props.content,
                favorite,
                props.initialColor
            );
            setChangeFavorite(favorite);
        } catch (error) {
            console.error("Erro ao salvar a cor na API:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteCard(props.id); //Chama a API para excluir no BD
            props.onDelete(); //Chama a função para excluir na TELA
        } catch (error) {
            console.error("Erro ao excluir o card:", error);
        }
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
                    <RiDeleteBinLine
                        className={styles.deleteIcon}
                        onClick={handleDelete}
                    />
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
