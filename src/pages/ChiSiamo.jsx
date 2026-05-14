import { Link, NavLink } from "react-router";
import Navbar from "../components/Navbar";


function ChiSiamo() {
  return <main>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">Essenziale per scelta.</h1>
            <p className="lead">
              LastDrop nasce per chi cerca la qualità senza compromessi. 
              Uniamo il design contemporaneo a un approccio che rispetta il tempo e le risorse.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src="./images/ld-concept.png" 
              alt="LastDrop Concept" 
              className="img-fluid object-fit-cover img-concept" 
            />
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Il nostro "Drop"</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="fs-5">
                <strong>LastDrop</strong> è un impegno duplice. 
                È l'ultima tendenza del design urban, ma è anche l'attenzione 
                a non sprecare l'ultima goccia d'acqua. 
                Produciamo solo ciò che serve, con materiali sostenibili.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h3>Tessuti</h3>
            <p className="text-muted">Ricercatezza nelle fibre naturali e riciclate per una durata superiore.</p>
          </div>
          <div className="col-md-4">
            <h3>Stile</h3>
            <p className="text-muted">Linee pulite e colori neutri. Capi che non passano mai di moda.</p>
          </div>
          <div className="col-md-4">
            <h3>Impatto</h3>
            <p className="text-muted">Processi produttivi a basso consumo idrico. Consapevolezza reale.</p>
          </div>
        </div>
      </section>

      <section className="container py-5 text-center">
        <Link to="/prodotti" className="btn btn-dark px-5 py-2">
          Sfoglia la Collezione
        </Link>
      </section>
    </main>
}
export default ChiSiamo