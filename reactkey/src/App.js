import React,{ Component } from 'react';
class Item extends Component {
  componentDidMount(){
    console.log(this.props.text);
  }
  render(){
    return ( <li>{this.props.text}</li>)
  }
};


class App extends Component {
  constructor (){
    super()
    this.state={arr:[0,1]};
    this.addItem=this.addItem.bind(this)
  }
  addItem(){
    var arr=this.state.arr.slice(0);
    arr.push(arr.length);
    this.setState({arr:arr});
  }
  render() {
    var arr=this.state.arr.slice(0);
    arr.reverse();
    return (
      <div className="App">
      <button onClick={this.addItem}>add item</button>
        <ul>
        {arr.map((item,index)=>{
          return <Item key={arr.length -index} text={item}/>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
