import React, { useEffect, useState } from "react";
import { getTarefas } from "../../lib/api";
import { Button, Card, Nav } from "../../components";
import styles from "./Tarefas.module.scss";
import { ITarefas } from "../../types/Tarefa";

const TarefasPage: React.FC = () => {
    const [tarefas, setTarefas] = React.useState<ITarefas[]>([]);
    const [tarefasCopia, setTarefasCopias] = useState<ITarefas[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const fetchTarefas = async () => {
            const payload = await getTarefas();
            setTarefas(payload.data);
            setTarefasCopias(payload.data);
        };
        fetchTarefas();
    }, []);

    const handleReloadData = async () => {
        const payload = await getTarefas();
        setTarefas(payload.data);
        setTarefasCopias(payload.data);
        setSearchQuery("");
    };

    return (
        <div className={styles.Tarefas}>
            <div className={styles.top}>
                <Nav
                    setDados={setTarefas}
                    dadosOriginais={tarefasCopia}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <main className={styles.main}>
                <Button onReloadData={handleReloadData} />
                <label>Favoritas</label>
                <ul className={styles.cardsFavoritos}>
                    {tarefas
                        .filter((tarefa) => tarefa.favorite)
                        .map((tarefa) => (
                            <Card
                                key={tarefa.id}
                                id={tarefa.id}
                                title={tarefa.title}
                                content={tarefa.content}
                                favorite={tarefa.favorite}
                                initialColor={tarefa.background_color}
                                onReloadData={handleReloadData}
                            />
                        ))}
                </ul>
                <label className={styles.labelOutras}>Outras</label>
                <ul className={styles.cards}>
                    {tarefas
                        .filter((tarefa) => !tarefa.favorite)
                        .map((tarefa) => {
                            return (
                                <Card
                                    key={tarefa.id}
                                    id={tarefa.id}
                                    title={tarefa.title}
                                    content={tarefa.content}
                                    favorite={tarefa.favorite}
                                    initialColor={tarefa.background_color}
                                    onReloadData={handleReloadData}
                                />
                            );
                        })}
                </ul>
            </main>
        </div>
    );
};

export default TarefasPage;
