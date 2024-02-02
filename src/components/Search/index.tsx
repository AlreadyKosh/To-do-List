import React, { ChangeEvent, useEffect } from "react";
import styles from "./Search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ITarefas } from "../../types/Tarefa";

interface ISearch {
    placeholder: string;
    setDados: React.Dispatch<React.SetStateAction<ITarefas[]>>;
    dadosOriginais: ITarefas[];
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search = (props: ISearch) => {
    const handleClearSearch = () => {
        props.setSearchQuery("");
        props.setDados(props.dadosOriginais);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        props.setSearchQuery(query);
        const filteredData = props.dadosOriginais.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.background_color
                    .toLowerCase()
                    .includes(query.toLowerCase())
        );

        props.setDados(filteredData);
    };

    return (
        <div className={styles.content}>
            <div className={styles.inputSearch}>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.searchQuery}
                    onChange={handleInputChange}
                />
                <HiMagnifyingGlass />
            </div>
            {props.searchQuery && (
                <button onClick={handleClearSearch}>X</button>
            )}
        </div>
    );
};

export default Search;
