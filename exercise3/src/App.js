import './App.css';
import ProductView from './components/ProductView';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {

  const [products, setProducts ] = useState([]);
  const [filteredResults, resultsFiltering] = useState([]);

  useEffect(() => {
    setProducts(ProductList.products)
    resultsFiltering(ProductList.products)
  }, [])

  const filterProducts = (inputFieldContent) => {
    if (inputFieldContent !==''){
      resultsFiltering(() => products.filter(p => p.description.toLowerCase().includes(inputFieldContent.toLowerCase())));
    } else {
      resultsFiltering(ProductList.products)
    }
  }

  const filterByCategory = (dropdownValue) => {
    if (dropdownValue !==''){
      resultsFiltering(() => products.filter(p => p.category.toLowerCase().includes(dropdownValue.toLowerCase())));
    } else {
      resultsFiltering(ProductList.products)
    }
  }

  const allCategories = ProductList.products;

  return (
    <div className="App">
      <Header filterInput={ filterProducts } filterDropdown={ filterByCategory } categories={ allCategories }/>
      <ProductView searchResults= { filteredResults } />
    </div>
  );
}

export default App;
