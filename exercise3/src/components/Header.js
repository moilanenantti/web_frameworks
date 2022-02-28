import React from 'react';
import './Header.css';

function Header( {filterInput, filterDropdown, categories} ) {

    const mapped = categories.map((obj, index) => obj.category);
    const uniqueCategories = mapped.filter((category, index) =>  mapped.indexOf(category) === index  )

    return (
        <div className="header">
            <img className="header_logo" src="./images/logo.png"  alt="rating" />
            <div className="header_search">
                <select className="dropdown_filter" onChange={answer => filterDropdown(answer.target.value)}>
                    <option value="">All products</option>
                    { uniqueCategories.map((category) => (
                        <option value={category}>{category}</option>))
                    }
                </select>
                <input className="header_search_input" onChange={input => filterInput(input.target.value)} type="text" placeholder="Search from all products..."/>
                <img className="search_icon" src="./images/search_icon.png" alt="srcIcon"/>   
            </div>
            <div className="header_navigation">
                <div className="header_opt">
                    <span className="header_optFirstLine">Hello</span>
                    <span className="header_optSecondLine">Sign in</span>
                </div>
                <div className="header_opt">
                    <span className="header_optFirstLine">Returns</span>
                    <span className="header_optSecondLine">& Orders</span>
                </div>
                <div className="header_opt">
                    <span className="header_optFirstLine">Your</span>
                    <span className="header_optSecondLine">Prime</span>
                </div>
                <div className="header_basket">
                    <img className="basket_icon" src="./images/basket_icon.png" alt="srcIcon"/>
                    <span className="basket_count">0</span>
                </div>
            </div>
        </div>
    );
}
  
export default Header;