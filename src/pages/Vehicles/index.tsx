import React, {useEffect, useState } from "react";
import { getTarefas } from "../../lib/api";
import { Button, Card, Nav } from "../../components";
import styles from "./Vehicles.module.scss";
import { ITarefas } from "../../types/Tarefa";

const TarefasPage:React.FC = () => {
  const [tarefas, setTarefas] = React.useState<ITarefas[]>([]);
  const [tarefasCopia, setTarefasCopias] = useState<ITarefas[]>([]);
  
  useEffect(() => {
    const fetchTarefas = async () => {
      const payload = await getTarefas();
      
      setTarefas(payload.data);
      setTarefasCopias(payload.data);
    };
    console.log(tarefas)

    fetchTarefas();

  }, []);

  return (
   
  <div className={styles.Tarefas}>
    <div className={styles.top}>
      <Nav setDados={setTarefasCopias} dadosOriginais={tarefas}/>
    </div>
    <main className={styles.main}>
      <Button text="Add new vehicle" onClick={() => {}} />
      <ul>
        {tarefasCopia.map(tarefa => {return(<Card key={tarefa.id} title={tarefa.title} content={tarefa.content}></Card>)})}
      </ul>

    </main>
  </div>
  );
};

export default TarefasPage;
