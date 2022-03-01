import React from 'react';
import './Header.css';

function Header( {filterInput, filterDropdown, categories, cartAmount, toggleCart} ) {

    const mapped = categories.map((obj) => obj.category);
    const uniqueCategories = mapped.filter((category, index) =>  mapped.indexOf(category) === index  )

    function message(){
        alert("You can add items to cart and press cart icon to see them")
    }

    return (
        <div className="header">
            <img className="header_logo" src="./images/logo.png"  alt="rating" />
            <div className="header_search">
                <select className="dropdown_filter" onChange={answer => filterDropdown(answer.target.value)}>
                    <option value="">All products</option>
                    { uniqueCategories.map((category, key) => (
                        <option key={category} value={category}>{category}</option>))
                    }
                </select>
                <input className="header_search_input" onChange={input => filterInput(input.target.value)} type="text" placeholder="Search from all products..."/>
                <img className="search_icon" src="./images/search_icon.png" alt="srcIcon" onClick={ () => alert("This button doesn't do anything :(") }/>   
            </div>
            <div className="header_navigation">
                <div className="header_opt" onClick={ () => message() }>
                    <span className="header_optFirstLine">Hello</span>
                    <span className="header_optSecondLine">Sign in</span>
                </div>
                <div className="header_opt" onClick={ () => message() }>
                    <span className="header_optFirstLine">Returns</span>
                    <span className="header_optSecondLine">& Orders</span>
                </div>
                <div className="header_opt" onClick={ () => message() }>
                    <span className="header_optFirstLine">Your</span>
                    <span className="header_optSecondLine">Prime</span>
                </div>
                <div className="header_basket">
                    <img className="basket_icon" src="./images/basket_icon.png" alt="srcIcon" onClick={ toggleCart }/>
                    <span className="basket_count" onClick={ toggleCart }>{cartAmount}</span>
                </div>
            </div>
        </div>
    );
}
  
export default Header;