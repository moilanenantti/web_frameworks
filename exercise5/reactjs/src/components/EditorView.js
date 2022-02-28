import React from 'react';
import './ProductFrame.css';

export default function EditorView( {title, key, description, price, thumbnail, rating, rating_img, itemId, deleteProd} ){

    return (
        <div className="card_container">
                <img className="product_thumbnail" src={`./images/${thumbnail}`} />
            <div>
                <div className="product_description"><span className="product_title">{title} | </span>{description}</div>
            </div>
            <div className="rating">
                <img className="rating_image" src={`./images/${rating_img}`}  alt="rating" />
                <span className="rating_info">
                    <img className="rating_info_image" src={`./images/${rating_img}`}  alt="rating" />
                    <div>{rating} stars out of 5.</div>
                </span>
            </div>
            <div className="price">${price}</div>
            <button className="add_to_cart">Add to cart</button>

            <div>
                <button onClick={() => deleteProd(itemId)}>Delete Item</button>
            </div>


        </div>
    );
}