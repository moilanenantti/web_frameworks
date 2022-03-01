import React from 'react';
import './ProductView.css'

export default function ProductView( { data, addToCart } ) {
  return (
    <div className="product_frame">{
          data.map(data =>

            <div className="card_container" key={data.id}>
              <img className="product_thumbnail" src={data.thumbnail} alt="thumbnail" />
              <div>
                  <div className="product_description"><span className="product_title">{data.title} | </span>{data.description}</div>
              </div>
              <div className="rating">
                <img className="rating_image" src={data.rating_img} alt="rating" />
                <span className="rating_info">
                    <img className="rating_info_image" src={data.rating_img} alt="rating" />
                    <div>{data.rating} stars out of 5.</div>
                </span>
              </div>
            <div className="price">${data.price}</div>
          <button className="add_to_cart" onClick={() => addToCart(data)} >Add to cart</button>
        </div>
      )}
    </div>
  );
}
