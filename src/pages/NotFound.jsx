import { Link, NavLink } from "react-router"

function NotFound() {
    return <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
            {/* Icona o Numero Errore */}
            <h1 className="display-1 fw-bold text-primary">404</h1>

            <h2 className="mb-3">Oops! Pagina non trovata</h2>

            <p className="lead mb-4 text-secondary">
                Sembra che il capo che stavi cercando sia andato esaurito o che l'indirizzo sia errato.
            </p>

            {/* Bottone di ritorno alla Home */}
            <Link to="/" className="btn btn-dark btn-lg px-5 shadow-sm">
                Torna alla Home
            </Link>

            <div className="mt-5">
                <small className="text-muted">
                    Se pensi sia un errore del sistema, contatta il supporto di **LastDrop**.
                </small>
            </div>
        </div>
    </div>
}
export default NotFound