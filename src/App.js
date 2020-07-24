import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

// when invoked, we execute our action creator by referencing it as a prop
  handleOnClick() {
    // this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    // debugger
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

// export default connect(mapStateToProps)(App);
//first argument, mapStateToProps:accepts Redux store's state as an artument,
// returns new object using all or some of this state.
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// dispatch function is available as an argument to mapDispatchToProps
//by defining 'addItem' inside 'mapDispatchToProps,
//we include dispatch in the definition (we've bundled everything we need in a single prop value)
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
 
export default connect(mapStateToProps, {addItem})(App);

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.


