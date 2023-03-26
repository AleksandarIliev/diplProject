import { Link } from "react-router-dom";

export const Part = ({
    _ownerId,
    name, 
    imageUrl
}) => {
    return (
        <div id="Products">
            <div id="Product">
                <h4>{name}</h4>
                <img src={imageUrl} alt={name} /><br /><br />
                <Link to={`/catalog/${_ownerId}`} className="details">Details</Link>
            </div>
        </div>
    );
}