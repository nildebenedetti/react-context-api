import {
    Link,
    Navigate,
    useNavigate,
    useParams
} from "react-router";

import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Product() {
    const { id } = useParams() /* come se gli stessimo segnalando
        che per il componente products deve recuperare dalla route il parametro dinamico */
    const [product, setProduct] = useState({});
    const API_URL = 'https://fakestoreapi.com/products';
    const { title, description, category, image, price } = product;


    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(result => {
                return result.json();
            })
            .then(data => {
                setProduct(data);
                console.log(product);

            })
            .catch(error => {
                console.error('errore nel caricamento dei dati', error);

            })
    }, [id]);

    return <>
        <div className="container pdp-container">
            <div className="row">
                {/** il primo blocco con titolo - rating - img main  */}
                <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
                    <h1>{title}</h1>
                    <div className="rating">
                       {/* <p className="rating-p">{`${rate}/5 based on ${count} global contributors`}</p>*/}
                    </div>
                    <div className="container object-fit-cover py-4">
                        <img src={image} className="pdp-main-img" alt={title}></img>
                    </div>
                    <p className="pdp-price-text fw-bold">
                        <span>&euro; </span>{price}
                    </p>
                <p className="pdp-text fw-bold score-in-category">{`#${id} rated in ${category}`}</p>
                <p className="pdp-text pdp-description">{description}</p>
                </div>
            </div>
        </div>

    </>
}
export default Product