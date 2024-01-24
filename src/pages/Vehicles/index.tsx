import { useEffect, useState } from "react";
import { getTarefas } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { ITarefas } from "../../types/Tarefa";

const TarefasPage = () => {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [search, setSearch] = useState<string>("");

  const tarefasFiltros = tarefas.filter(team => team.title.includes(search));

  useEffect(() => {
    const fetchTarefas = async () => {
      const payload = await getTarefas();
      setTarefas(payload.data);
    };

    fetchTarefas();

  }, []);

  return (
   
  <div className={styles.Tarefas}>
    <div className={styles.top}>
      <Search placeholder="Pesquisar notas" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
    <main className={styles.main}>


      <Button text="Add new vehicle" onClick={() => {}} />
      <ul>
        {tarefasFiltros.map(tarefa => {return(<Card key={tarefa.id} title={tarefa.title} content={tarefa.content}></Card>)})}
      </ul>

    </main>
  </div>
  );
};

export default TarefasPage;
