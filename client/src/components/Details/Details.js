import { useState, useReducer, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { productServiceFactory } from '../../services/productService';
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from "../../services/commentService";
import { AddComment } from "./AddComment/AddComment";
import { productReducer } from "../../reducers/productReducer";

export const Details = () => {
    const { productId } = useParams();
    const { userId, isAuthenticated, email } = useAuthContext();
    const [product, dispach] = useReducer(productReducer, {});
    const { productService } = useService(productServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId)
        ])
            .then(([productData, comments]) => {
                const productState = {
                    ...productData,
                    comments,
                };
                dispach({type: "PRODUCT_FETCH", payload: productState});  
            })
    }, [productId]);

    const onCommentSubmit = async (values) => {
        const result = await commentService.create(productId, values.comment)
        
        dispach({
            type: "ADD_COMMENT", 
            payload: result,
            email,
        })
    };

    const isOwner = product._ownerId === userId;

    const onDelete = async () => {
        await productService.delete(product._id);
        navigate('/catalog')
    }

    return (
        <section id="productDetails">
            <h3>Product details</h3>
            <h3>{product.type}</h3>
            <img src={product.imageUrl} alt={product.type} />
            {isOwner && (
            <div className="buttons">
                <Link to={`/catalog/${product._id}/modify`} className="button">Modify</Link><br />
                <button className="button" onClick={onDelete}>Delete</button>
            </div>
            )}
            <div className="comemnt">
                <h3>Comemnts:</h3>
                <ul>
                    {product.comments && product.comments.map(x => (
                        <li key={x._id} className="comment">
                            <p>{x.author.email}: {x.comment}</p>
                        </li>
                    ))}
                </ul>
                {product.comments?.length === 0 && (
                    <p classname="noComment">There is no comment for this product.</p>
                )}
                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}
            </div>
        </section>
    );
}