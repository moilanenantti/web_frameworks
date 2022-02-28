import React from 'react';
import ProductFrame from './ProductFrame';
import './ProductView.css'

export default function ProductView( { searchResults } ) {
  return (
    <div className="products">{
      searchResults.map(data =>
      <ProductFrame
        key={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        rating={data.rating}
        rating_img={data.rating_img}
        thumbnail={data.thumbnail}
      />
    )}
    </div>
  );
}