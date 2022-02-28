//Antti Moilanen TVT21KMO

import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  /*
  addToExisting = (id, value, qty, unit) => {
    const objvalue = {...this.state.items, ['Milk']: 'Banana',
    };
  }*/

  

  addCarrots = () => {
    const numero = this.state.items.length;
    if (this.checkIfExists('Carrots') === false)
    {
      this.setState((state) => ({
        items: state.items.concat( { id: numero + 1, value: 'Carrots', qty: getRandomInt(1,5), unit: 'x' } )
      }))
    } else {
      this.setState({items: this.updateQty2('Carrots')});
      }
   };
  addCucumbers = () => {
    const numero = this.state.items.length; 
    if(this.checkIfExists('Cucumber') === false)
    {
      this.setState((state) => ({
        items: state.items.concat( { id: numero + 1, value: 'Cucumber', qty: getRandomInt(1,5), unit: 'x' } )
      }))
    } else {
      this.setState({items: this.updateQty2('Cucumber')});
    }
  };
  addCookies = () => {
    const numero = this.state.items.length;
    if(this.checkIfExists('Cookies') === false)
    {
      this.setState((state) => ({
        items: state.items.concat( { id: numero + 1, value: 'Cookies', qty: getRandomInt(1,5), unit: 'x' } )
      }))
    } else {
      this.setState({items: this.updateQty2('Cookies')});
    }
  };
  addJuice = () => {
    const numero = this.state.items.length;
    if(this.checkIfExists('Juice') === false)
    {
      this.setState((state) => ({
        items: state.items.concat( { id: numero + 1, value: 'Juice', qty: getRandomInt(1,5), unit: 'ltr' } )
      }))
    } else {
      this.setState({items: this.updateQty2('Juice')});
   }
  };


  updateQty2(value){
    var index = this.state.items.findIndex(el => el.value === value);
      //console.log(index);
    let stateCopy = [...this.state.items];
      //console.log(stateCopy); 
    let foodCopy = {...stateCopy[index] };
    foodCopy.qty = foodCopy.qty + getRandomInt(1,5);
    stateCopy[index] = foodCopy;
      //console.log(stateCopy[index]);
    return stateCopy;
  } 

  updateQty(value){
    //let qty1 = this.findOriginalQty('Carrots')
    //let qty2 = qty1 + getRandomInt(1,5);
    this.setState({
      items: this.state.items.map(el => (el.value === value ? Object.assign({}, el, { qty: 6 }) : el ))
    });
  }

  checkIfExists(value){
    return this.state.items.some(function(el){
      return el.value === value;
    });
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />

      <button style={{margin: '5px'}} onClick={ this.addCarrots }>Add carrots</button>
      <button style={{margin: '5px'}} onClick={ this.addCucumbers }>Add cucumbers</button>
      <button style={{margin: '5px'}} onClick={ this.addCookies }>Add cookies</button>
      <button style={{margin: '5px'}} onClick={ this.addJuice }>Add juice</button>  

    </div>
  }
}

function getRandomInt(min,max){
  return min + Math.floor(Math.random()*(max - min + 1));
}

export default App;