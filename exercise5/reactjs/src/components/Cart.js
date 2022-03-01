import React from 'react';
import './Cart.css';

function Cart( { data, toggleCart, getSum, removeItem } ) {

    console.log(data)

    return (
        <div className="cart">
        <div className="cart_box">
        <div className="Header">
            <div className="basket">Ostoskori</div>
            <div className="sum">TOTAL SUM: ${ getSum }</div>
            <div className="close_btn" onClick={ toggleCart }>Sulje</div>
        </div>{
            data.map(data => 
                <div className="products" key={data.id}>
                    <div className="flex">
                        <img className="thumbnail" src={data.thumbnail} alt="thumbnail" />
                        <div className="inner_flex">
                            <div className="desc"><span className="bolder">{data.title} | </span>{data.description}</div>
                            <div className="Secinner_flex">
                                <div className="price">${data.price}</div>
                                <button className="remove" onClick={() => removeItem(`${data.id}`)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default Cart;