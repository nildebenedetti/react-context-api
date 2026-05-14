import { Link, NavLink} from "react-router";

function ProductCard({
   product
}) {
    const { id, image, title, description, price, category} = product;
    return <div className="card col-12 col-md-6 col-lg-4 p-3 m-3 d-flex flex-column align-items-center justify-content-center">
        <div><h5 className="card-title productName py-3">{title}</h5></div>
        <img src={image} className="card-img-top" alt={title}></img>
        <div className="card-body">
            <p className="card-text productPrice">
                <span>&euro; </span>{price}
            </p>
            <p className="card-text productCategory">{category}</p>
            <Link to={`/prodotti/${id}`} className="btn btn-dark">Scopri</Link> 
        </div>
    </div>
}
export default ProductCard;