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
                        onClick={() => handleColorClick("azul-claro")}
                        style={{ background: "#bae2ff" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("verde-claro")}
                        style={{ background: "#b9ffdd" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("amarelo")}
                        style={{ background: "#ffe8ac" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("rosa-claro")}
                        style={{ background: "#ffcab9" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("vermelho")}
                        style={{ background: "#f99494" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("azul-escuro")}
                        style={{ background: "#9dd6ff" }}
                    ></button>
                </div>
                <div className={styles.modalTop}>
                    <button
                        onClick={() => handleColorClick("rosa")}
                        style={{ background: "#eca2ff" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("verde-limao")}
                        style={{ background: "#daff8b" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("laranja")}
                        style={{ background: "#ffa285" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("cinza")}
                        style={{ background: "#cdcdcd" }}
                    ></button>
                    <button
                        onClick={() => handleColorClick("preto")}
                        style={{ background: "#979797" }}
                    ></button>
                    <button
                        onClick={() => props.onSelectColor("marrom")}
                        style={{ background: "#a99a7c" }}
                    ></button>
                </div>
                <button onClick={props.onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default ColorModal;
