import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ITarefas } from "../../types/Tarefa";

interface ISearch {
    placeholder: string;
    setDados: React.Dispatch<React.SetStateAction<ITarefas[]>>;
    dadosOriginais: ITarefas[];
}

const Search: React.FC<ISearch> = ({
    setDados,
    dadosOriginais,
    placeholder,
}) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleClearSearch = () => {
        setSearchQuery("");
        setDados(dadosOriginais); // Restaura os dados originais quando o input é limpo
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filteredData = dadosOriginais.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.background_color
                    .toLowerCase()
                    .includes(query.toLowerCase())
        );

        setDados(filteredData);
    };

    return (
        <div className={styles.content}>
            <div className={styles.inputSearch}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <HiMagnifyingGlass />
            </div>
            {searchQuery && <button onClick={handleClearSearch}>X</button>}
        </div>
    );
};

export default Search;
