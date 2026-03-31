import { useState } from "react";
import { ITask } from "../types/Task";
import TaskCard from "../components/TaskCard";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [tarefas, setTarefas] = useState<ITask[]>([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer trabalho", concluida: false },
    { id: 3, titulo: "Revisar TypeScript", concluida: false },
    { id: 4, titulo: "Ler documentação", concluida: false },
    { id: 5, titulo: "Praticar exercícios", concluida: false },
  ]);

  function toggleTarefa(id: number) {
    const novas = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );

    setTarefas(novas);
  }

  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  const pendentes = total - concluidas;

  return (
    <main className="container-fluid mt-3">
      <Dashboard
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
      />

      <section>
        <h4>Lista de Tarefas</h4>

        {tarefas.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            tarefa={tarefa}
            onConcluir={toggleTarefa}
          />
        ))}
      </section>
    </main>
  );
}