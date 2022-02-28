import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductView from './components/ProductView';
import AdminView from './components/AdminView';

// okei tätähän voi siis valtavasti vielä sieventää ja turhaa koodia on tässä ihan liikaa mutta harjoittelua tämä on ollut :D

function App() {

  const [products, setProducts ] = useState([]);
  const [filteredResults, resultsFiltering] = useState([]);
  const [delProd, ApiDelete] = useState('')
  const [addedProduct, setAddedProduct] = useState('')
  const [modifiedProduct, setModifiedProduct] = useState('')
  const [ref, setRef] = useState(false)
  const [editorModeOn, setEditorMode] = useState(false);
  const [cart, setCartItems ] = useState([]);
  var [cartCount, setCartCount] = useState(0);

// GET PRODUCT DATA //
  useEffect(() => {
    const getData = async () => {
      const results = await axios.get('http://localhost:8080/products')
      setProducts(results.data);
      resultsFiltering(results.data);
    }
    getData();
  }, [ref])

  useEffect(() => {
    resultsFiltering(filteredResults)
  }, [filteredResults])


  function refresh(){
    const getData = async () => {
      const results = await axios.get('http://localhost:8080/products')
      setProducts(results.data);
      resultsFiltering(results.data);
    }
    getData();
  }

// DELETION //
  const deleteProduct = (index) => {
    ApiDelete(index)
  }
  useEffect(() => {
    if (delProd !== '') {
        const productDeletion = async () => {
        await axios.delete(`http://localhost:8080/products/${delProd}`)
      }
      productDeletion();
      setTimeout(() => {refresh();}, 500);
      alert("Product deleted!");
    }
  }, [delProd])


// ADDITION //
  const addingProduct = (newProduct) => {
    setAddedProduct(newProduct)
  }
  useEffect(() => {
    if (addedProduct !== '') {
        const productAddition = async () => {
          await axios.post('http://localhost:8080/products', { addedProduct })
          setRef(!ref)
        }
      productAddition()
      setTimeout(() => {refresh();}, 500);
      alert("Product added!");
    }
  }, [addedProduct])


// MODIFY PRODUCT //
  const modifyProduct = (param) => {
    let clone = [...products]
    let itemId = clone.findIndex(x => x.id == param.id)
    if (itemId !== -1) {
      setModifiedProduct(param)
    } else {
      alert("Error! No matching product ID!")
    }
  }
  useEffect(() => {
    if (modifiedProduct !== '') {
        const productModification = async () => {
          await axios.put(`http://localhost:8080/products/${modifiedProduct.id}`, { modifiedProduct })
        }
      productModification()
      setTimeout(() => {refresh();}, 500);
      alert("Product modified!");
    }
  }, [modifiedProduct])


// FILTER PRODUCTS USING SEARCH //
  const filterProducts = (inputFieldContent) => {
    if (inputFieldContent !==''){
      resultsFiltering(() => products.filter(p => p.description.toLowerCase().includes(inputFieldContent.toLowerCase())));
    } else {
      resultsFiltering(products);
    }
  }

// FILTER PRODUCTS BY CATEGORY USING DROPDOWN SELECTION //
  const filterByCategory = (dropdownValue) => {
    if (dropdownValue !==""){
      resultsFiltering(() => products.filter(p => p.category.toLowerCase().includes(dropdownValue.toLowerCase())));
    } else {
      resultsFiltering(products);
    }
  }


  const setCart = (data) => {
    setCartItems(data)
    setCartCount(cartCount+1);
  }


  function increaseCart(data){
    console.log(data)
  }


  let allCategories = products;
  let output = <ProductView data= { filteredResults } addToCart= { setCart } />;
  if( editorModeOn == true ) {
    output = <AdminView data={ filteredResults } deleteProduct={ deleteProduct } modifyProduct={ modifyProduct } addProduct={ addingProduct } />;
  }


  return (
    <div className="App">
      <Header filterInput={ filterProducts } filterDropdown={ filterByCategory } categories={ allCategories } cartAmount= { cartCount }/>
      
      <button className="switch_mode" onClick={ () => setEditorMode(!editorModeOn) }>Admin switch</button>
      { output }
    </div>
  );
}

export default App;
