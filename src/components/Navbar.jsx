import { Link, NavLink } from "react-router";
import useBudget from "../hooks/useBudget";
import { useState } from "react";

function Navbar() {
    const { budgetMode, setBudgetMode } = useBudget();

    function btnModeHandler() {

        setBudgetMode(!budgetMode);
        console.log(budgetMode);

    };



    return <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
        <div className="container-fluid d-flex justify-content-between">
            <div className="left-navbar d-flex">
                <Link to="/" className="navbar-brand" >
                    <img src="./images/lastdrop-logo-1.png" alt="lastdrop logo" className="navbar-logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/prodotti" className="nav-link">Prodotti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/chi-siamo" className="nav-link">Chi Siamo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-sidebar">
                <form className="container-fluid justify-content-start">
                    <button onClick={btnModeHandler()} className="btn btn-sm btn-outline-danger" type="button">Modalità Povero</button>
                </form>
            </div>
        </div>
    </nav>
}
export default Navbar