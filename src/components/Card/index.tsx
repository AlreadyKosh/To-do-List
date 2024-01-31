import React, { useState } from "react";
import styles from "./Card.module.scss";
import { HiOutlinePencil } from "react-icons/hi";
import { PiPaintBucket } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
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
    onReloadData: () => void;
}

const Card: React.FC<ICard> = (props: ICard) => {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        props.initialColor
    );
    const [showColorModal, setShowColorModal] = useState<boolean>(false);
    const [changeFavorite, setChangeFavorite] = useState<boolean>(
        props.favorite
    );
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTitle, setEditedTitle] = useState<string>(props.title);
    const [editedContent, setEditedContent] = useState<string>(props.content);

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
            if (props.onReloadData) {
                props.onReloadData();
            }
        } catch (error) {
            console.error("Erro ao salvar a cor na API:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteCard(props.id); //Chama a API para excluir no BD
            if (props.onReloadData) {
                props.onReloadData();
            } //Chama a função para excluir na TELA
        } catch (error) {
            console.error("Erro ao excluir o card:", error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            await updateTarefa(
                props.id,
                editedTitle,
                editedContent,
                props.favorite,
                backgroundColor
            );
            setIsEditing(false);

            if (props.onReloadData) {
                props.onReloadData();
            }
        } catch (error) {
            console.error("Erro ao salvar a edição na API:", error);
        }
    };

    return (
        <div className={`${styles.Card} ${styles[backgroundColor]}`}>
            <div className={styles.top}>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className={styles.inputTitle}
                        />
                    </>
                ) : (
                    <>
                        <h2>{props.title}</h2>
                        <IconContext.Provider value={{ size: "1.3em" }}>
                            {props.favorite ? (
                                <IoIosStar
                                    onClick={() =>
                                        handleFavoriteChange(!changeFavorite)
                                    }
                                />
                            ) : (
                                <IoIosStarOutline
                                    onClick={() =>
                                        handleFavoriteChange(!changeFavorite)
                                    }
                                />
                            )}
                        </IconContext.Provider>
                    </>
                )}
            </div>
            <div className={styles.content}>
                {isEditing ? (
                    <>
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className={styles.inputContent}
                        />
                    </>
                ) : (
                    <p>{props.content}</p>
                )}
            </div>
            <div className={styles.bottom}>
                <IconContext.Provider value={{ size: "1.3em" }}>
                    <PiPaintBucket
                        className={styles.bottomIcon}
                        onClick={() => setShowColorModal(true)}
                    />
                    {isEditing ? (
                        <IoCheckmarkSharp onClick={handleSaveClick} />
                    ) : (
                        <HiOutlinePencil onClick={handleEditClick} />
                    )}
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
