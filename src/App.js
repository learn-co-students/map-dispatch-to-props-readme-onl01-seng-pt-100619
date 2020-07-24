import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem
  } 
  // Code change: this.props.store.dispatch is no longer being called
  //action can be executued by referencing it as a prop


  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//function accepts store's state as an argument
//returns part of state object to be used as prop
//all of state object would be just "return state"
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// New function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };



// export default connect(mapStateToProps, mapDispatchToProps)(App); 
export default connect(state => ({items: state.items}), {addItem})(App); 
//functions are passed into connect
//but connect will also accept objects with key/value pairs
