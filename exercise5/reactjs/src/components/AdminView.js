import React, {useState} from 'react';
import './ProductView.css'
import Draggable from 'react-draggable';

export default function AdminView( { data, deleteProduct, modifyProduct, addProduct } ) {

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        rating: "",
        category: "",
        brand: "",
        thumbnail: ""
    })

    function AvailableId(){
       // var result = data.length;
        return(<div>Product ID {/*<span className="amount_id">{ result + 1}</span>*/} is automatically given to new products</div>);
    }

  return (
    <div>
        <Draggable>
            <div className="editor_bar">
                <div className="available_id"><AvailableId /></div>
                <div className="proTip">Tip: drag this box from any gray area..</div>
                <div className="proTip">Please fill all form fields to avoid errors!*</div>
                <div className="proTipSmall">NEW PRODUCTS GET ID AUTOMATICALLY, HOWEVER</div>
                <div className="proTipSmall">PLEASE FILL ID WHEN MODIFYING OLD PRODUCTS</div>
                <form className="admin_form">
                    <div>Product ID: <input type="text" name="id" autoComplete="off" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value, })} /></div>
                    <div>Title: <input type="text" name="title" autoComplete="off" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value, })} /></div>
                    <div>Description: <input type="text" name="description" autoComplete="off" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value, })} /></div>
                    <div>Price: <input type="number" name="price"  min="0" autoComplete="off" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value, })} /></div>
                    <div>Rating: <input type="number" name="rating" min="1" max="5" autoComplete="off" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value, })} /> (acceptable values: 1-5)</div>
                    <div>Category: <input type="text" name="category" autoComplete="off" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value, })} /></div>
                    <div>Brand: <input type="text" name="brand" autoComplete="off" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value, })} /></div>
                    <div>Thumbnail (url): <input type="text" name="thumbnail" autoComplete="off" value={formData.thumbnail} onChange={(e) => setFormData({...formData, thumbnail: e.target.value, })} /></div>
                </form>
                <div className="buttons">
                    <button className="btn" onClick={() => addProduct(formData)}>Add new product</button>
                    <button className="btn_mod" onClick={() => modifyProduct(formData)}>Modify existing product</button>
                </div>
            </div>
        </Draggable>
    
        <div className="product_frame"> {
            data.map(data =>
                <div className="card_container" key={data.id}>
                    <img className="product_thumbnail" src={data.thumbnail} alt="thumbnail" />
                    <div>
                        <div className="product_description"><span className="product_title">{data.title} | </span>{data.description} </div>
                    </div>
                    <div className="rating">
                        <img className="rating_image" src={data.rating_img}  alt="rating" />
                        <span className="rating_info">
                            <img className="rating_info_image" src={data.rating_img}  alt="rating" />
                            <div>{data.rating} stars out of 5.</div>
                        </span>
                    </div>
                    <div className="price">${data.price}</div>
                    {/*<button className="add_to_cart">Add to cart</button>*/}

                    <div className="admin_controls">
                    <button className="delete_btn" onClick={() => deleteProduct(`${data.id}`)}>Delete Item</button>
                    <div>Product information (not editable):</div>
                    <form>
                        <input value={`ID: ${data.id}`} readOnly/>
                        <input value={`TITLE: ${data.title}`} readOnly />
                        <input value={`DESC: ${data.description}`} readOnly />
                        <input value={`PRICE: ${data.price}`} readOnly />
                        <input value={`RATING: ${data.rating}`} readOnly />
                        <input value={`RATING_IMG: ${data.rating_img}`} readOnly />
                        <input value={`CATEG: ${data.category}`} readOnly />
                        <input value={`BRAND: ${data.brand}`} readOnly />
                        <input value={`THUMBNL: ${data.thumbnail}`} readOnly />
                    </form>

                </div>
            </div> )}
        </div>
    </div> );
}