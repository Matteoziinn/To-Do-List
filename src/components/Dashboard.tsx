interface Props {
  total: number;
  concluidas: number;
  pendentes: number;
}

export default function Dashboard({ total, concluidas, pendentes }: Props) {
  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <div className="card p-2">
          <h6>Total</h6>
          <p>{total}</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-2">
          <h6>Concluídas</h6>
          <p>{concluidas}</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-2">
          <h6>Pendentes</h6>
          <p>{pendentes}</p>
        </div>
      </div>
    </div>
  );
}