import React, { useState } from "react";
import styles from "./Button.module.scss";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { PiPaintBucket } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { createNewCard } from "../../lib/api";
import Modal from "../Modal";

interface INewCardForm {
    onReloadData: () => void;
}

const Button = (props: INewCardForm) => {
    const [newCardTitle, setNewCardTitle] = useState<string>("");
    const [newCardContent, setNewCardContent] = useState<string>("");
    const [newCardFavorite, setNewCardFavorite] = useState<boolean>(false);
    const [newCardBackgroundColor, setNewCardBackgroundColor] =
        useState<string>("#ffffff");
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [showColorModal, setShowColorModal] = useState<boolean>(false);

    const handleColorChange = async (color: string) => {
        try {
            setNewCardBackgroundColor(color);
            setShowColorModal(false);
        } catch (error) {
            console.error("Erro ao salvar a cor na API:", error);
        }
    };

    const handleSaveClick = async () => {
        try {
            await createNewCard(
                newCardTitle,
                newCardContent,
                newCardFavorite,
                newCardBackgroundColor
            );
            setIsFormVisible(false);
            setNewCardTitle("");
            setNewCardContent("");
            setIsFormVisible(false);
            setNewCardBackgroundColor("#fff");

            if (props.onReloadData) {
                props.onReloadData();
            }
        } catch (error) {
            console.error("Erro ao salvar a edição na API:", error);
        }
    };

    const calculateRows = () => {
        const rowCount = newCardContent.split("\n").length;
        return Math.max(rowCount, 3);
    };

    return (
        <a
            className={`${styles.Button} ${styles[newCardBackgroundColor]}`}
            href="/#"
            onClick={() => setIsFormVisible(true)}
        >
            <div className={styles.top}>
                {isFormVisible ? (
                    <>
                        <input
                            type="text"
                            placeholder="Insira o Titulo Aqui"
                            value={newCardTitle}
                            onChange={(e) => setNewCardTitle(e.target.value)}
                            className={styles.inputTitle}
                        />
                    </>
                ) : (
                    <h2>Titulo</h2>
                )}
                <IconContext.Provider value={{ size: "1.3em" }}>
                    {newCardFavorite ? (
                        <IoIosStar onClick={() => setNewCardFavorite(false)} />
                    ) : (
                        <IoIosStarOutline
                            onClick={() => setNewCardFavorite(true)}
                        />
                    )}
                </IconContext.Provider>
            </div>
            <div className={styles.mid}>
                {isFormVisible ? (
                    <>
                        <textarea
                            placeholder="Conteúdo do Novo Card"
                            value={newCardContent}
                            onChange={(e) => setNewCardContent(e.target.value)}
                            className={styles.inputContent}
                            rows={calculateRows()}
                        />
                    </>
                ) : (
                    <p>Criar Nota...</p>
                )}
            </div>
            {isFormVisible ? (
                <div className={styles.bottom}>
                    <IconContext.Provider value={{ size: "1.3em" }}>
                        <PiPaintBucket
                            className={styles.bottomIcon}
                            onClick={() => setShowColorModal(true)}
                        />
                        <IoCheckmarkSharp onClick={handleSaveClick} />
                    </IconContext.Provider>
                </div>
            ) : null}
            {showColorModal && (
                <Modal
                    onClose={() => setShowColorModal(false)}
                    onSelectColor={handleColorChange}
                />
            )}
        </a>
    );
};

export default Button;
