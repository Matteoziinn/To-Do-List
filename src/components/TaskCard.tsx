import { ITask } from "../types/Task";

interface Props {
    tarefa: ITask;
    onConcluir: (id: number) => void;
}

export default function TaskCard({ tarefa, onConcluir }: Props) {
    return (
  <div className="card mb-2">
    <div className="card-body d-flex justify-content-between align-items-center">

      <span
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none",
          color: tarefa.concluida ? "gray" : "black",
        }}
      >
        {tarefa.titulo}
      </span>

      <button
        className={`btn btn-sm ${
          tarefa.concluida ? "btn-warning" : "btn-success"
        }`}
        onClick={() => {
          console.log("clicou");
          onConcluir(tarefa.id);
        }}
      >
        {tarefa.concluida ? "Desmarcar" : "Concluir"}
      </button>

    </div>
  </div>
);
}