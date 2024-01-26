import React from "react";
import styles from "./Modal.module.scss"; // Crie o arquivo CSS para os estilos do modal

interface Modal {
    onClose: () => void;
    onSelectColor: (color: string) => void;
}

const ColorModal = (props: Modal) => {
    const handleColorClick = (color: string) => {
        props.onSelectColor(color);
        props.onClose();
    };
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalTop}>
                    <button
                        onClick={() => handleColorClick("bae2ff")}
                        style={{ background: "#bae2ff" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("b9ffdd")}
                        style={{ background: "#b9ffdd" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("ffe8ac")}
                        style={{ background: "#ffe8ac" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("ffcab9")}
                        style={{ background: "#ffcab9" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("f99494")}
                        style={{ background: "#f99494" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("B9dd6ff")}
                        style={{ background: "#9dd6ff" }}
                    ></button>
                </div>
                <div className={styles.modalTop}>
                    <button
                        onClick={() => handleColorClick("eca2ff")}
                        style={{ background: "#eca2ff" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("daff8b")}
                        style={{ background: "#daff8b" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("ffa285")}
                        style={{ background: "#ffa285" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("cdcdcd")}
                        style={{ background: "#cdcdcd" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("G979797")}
                        style={{ background: "#979797" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("a99a7c")}
                        style={{ background: "#a99a7c" }}
                    ></button>
                </div>
                <button onClick={props.onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ColorModal;
