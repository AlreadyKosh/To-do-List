import React from "react";
import styles from "./Nav.module.scss";
import Search from "../Search";
import Logo from "../../assets/img/image8.png";
import { ITarefas } from "../../types/Tarefa";

interface INav {
    setDados: React.Dispatch<React.SetStateAction<ITarefas[]>>;
    dadosOriginais: ITarefas[];
}

const Nav: React.FC<INav> = ({ setDados, dadosOriginais }) => {
    return (
        <div className={styles.nav}>
            <div className={styles.logoNome}>
                <img src={Logo} alt="Logo"></img>
                <h3 className={styles.title}>CoreNotes</h3>
            </div>
            <Search
                setDados={setDados}
                placeholder="Pesquise a tarefa"
                dadosOriginais={dadosOriginais}
            />
        </div>
    );
};

export default Nav;
