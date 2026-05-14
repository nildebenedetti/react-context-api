import { Link, NavLink } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import useBudget from "../hooks/useBudget";



function Prodotti() {
    {/** mi setto una variabile di stato per la lista di prodotti 
    di modo che sia dinamica e aggiornata quando navigo questa pagina
    e gestire eventuali trigger che verranno aggiunti in futuro*/}

    const [productList, setProductList] = useState([]);
    const { budgetMode, setBudgetMode } = useBudget();

    {/* adesso devo scrivermi la fetch dei prodotti */ }
    useEffect(() => {
        const URL_API = 'https://fakestoreapi.com/products';

        fetch(URL_API)
            .then(result => {
                return result.json();
            })
            .then(data => {
                if (budgetMode) {
                    const listWithMode = data.filter(product => {
                        const priceValue = Number(product.price)
                        return priceValue <= 30;
                    })
                    setProductList(listWithMode);
                } else {
                    setProductList(data);
                }
            })
            .catch(error => {
                console.error('errore durnte importazione dati', error)
            })

    }, [budgetMode]);



    return <div>
        <header className="header d-flex justify-content-center py-3 flex-column">
            <div className="px-3">
                <h3> Prodotti</h3>
            </div>
            <div className="px-3">
                <p>Trova l'articolo perfetto per te!</p>
            </div>
        </header>
        <div className="container d-flex justify-content-center mx-3">
            <div className="row g-2 d-flex flex-row justify-content-center align-items-flex-start">
                {productList.map(product => {
                    return <ProductCard
                        key={product.id}
                        product={product}
                    />
                })}
            </div>
        </div>


    </div>
}
export default Prodotti