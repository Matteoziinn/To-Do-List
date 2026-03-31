import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./styles/custom.css";

function App() {
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">

          <aside className="col-md-3 col-12">
            <Sidebar />
          </aside>

          <section className="col-md-9 col-12">
            <Home />
          </section>

        </div>
      </div>

      <address className="text-center mt-4">
        Matteo Caetano - 30/03/2026 <br />
        Prof. Alexandre Almeida - Desenvolvimento Web 
      </address>
    </>
  );
}

export default App;