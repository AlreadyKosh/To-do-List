import React from "react";
import styles from "./Nav.module.scss";
import Search from "../Search";
import Logo from "../../assets/img/image8.png";
import { ITarefas } from "../../types/Tarefa";

interface INav {
    setDados: React.Dispatch<React.SetStateAction<ITarefas[]>>;
    dadosOriginais: ITarefas[];
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Nav = (props: INav) => {
    return (
        <div className={styles.nav}>
            <div className={styles.logoNome}>
                <img src={Logo} alt="Logo"></img>
                <h3 className={styles.title}>NixNotes</h3>
            </div>
            <Search
                setDados={props.setDados}
                placeholder="Pesquise a tarefa"
                dadosOriginais={props.dadosOriginais}
                searchQuery={props.searchQuery}
                setSearchQuery={props.setSearchQuery}
            />
        </div>
    );
};

export default Nav;
