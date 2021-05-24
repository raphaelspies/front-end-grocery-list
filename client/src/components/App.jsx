import ReactDOM from 'react-dom';
import React from 'react';
import groceriesData from '../data/groceriesData.js'
import GroceryItem from './groceryItem.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.addGrocery = this.addGrocery.bind(this);
  }

   addGrocery (e) {
    e.preventDefault();
    console.log('grocery list add!')
   };

  render() {
    var groceryList = groceriesData.map((item, index) => {
      return (<GroceryItem name = {item.name} quantity = {item.quantity} key = {index}/>)
    })
  return (
          <div>
            <img src="grocery-bags.png" />
            <h1>Grocery List</h1>
            <form>
              <label><input name="itemInput" placeholder="Item name" /></label>
              <label><input name="quantityInput" placeholder="# of items" /></label>
              <button onClick = {this.addGrocery}>Add Grocery</button>
              <ul className="groceries">
                <li>
                  <span>{groceryList}</span>
                </li>
              </ul>
            </form>
          </div>
        );
  }
}

export default App;

// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );