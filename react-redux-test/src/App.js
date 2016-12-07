import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'
import TodoList from './components/TodoList'
import {connect} from 'react-redux';
import {addTodo} from "./actions"

class App extends Component {
  render() {
    console.log("render app");
    let {state}=this.props;
    return (
      <div className="App">
       <AddTodo  ></AddTodo>    
       <TodoList todos={state}></TodoList>
      </div>
    );
  }
}
function mapStatetoProps(state){
  return {state:state}
}
function mapDispatchToProps(dispatch){
  return {
    addTodo:(text)=>{
        dispatch(addTodo(text))
    }
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
