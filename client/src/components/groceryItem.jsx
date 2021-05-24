import React from 'react'

// class GroceryItem extends React.Component {
//   constructor(props) {
//     super()
//     this.name = this.props.name
//   }
//   render(props) {
//     return (
//       <div>
//         <p>{this.name}</p>
//         Hello from grocery list!
//       </div>
//     )
//   }
// }

var GroceryItem = (props) => {
  return (
    <div>
      {props.name} - {props.quantity}
    </div>
  )
}

export default GroceryItem;