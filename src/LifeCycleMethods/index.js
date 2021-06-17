import React, { Component } from "react";
import "./index.css"

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        product: [],
        count: 0
      };
    console.log("first call constructor");
  }
  componentDidMount() {
    console.log("1 - componentDidMount - 1");
    setTimeout(() =>
    fetch("https://607c412c67e6530017573d5a.mockapi.io/shopping")
    .then((response) => response.json())
    .then((json) =>
      this.setState({
        product: json,
        loading: false
      })) ,2000);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("should Component Update - 1")
    if(nextState.count<=10 && !(nextState.count < 0)){
      return true
    }else{
      return false
    }
  }

  render() {
    console.log("first call render");
    const { count,loading, product } = this.state;
    return (
      <div>
        <h1>Life Cycle Method = {count}</h1>
        <button onClick={()=> this.setState({count: this.state.count - 1})}>Decrement</button>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>Increment</button>
        
        {loading && <h1><img style={{width: "40%"}} src="https://cssauthor.com/wp-content/uploads/2018/06/Copper-Loader.gif" /></h1>}
       
        <hr />

        <Life count={count}/>

        {product.length ? product.map((item) => 
            <div className="products">
                <img src={item.preview} />
                <h2 className="product-title">Name: {item.name}</h2>
                <p className="product-brand">Brand: {item.brand}</p>
                <p className="product-price">Price: {item.price}</p>
            </div>
        ) : "" } 
      </div>
    );
  }
}

export default LifeCycle;

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    console.log("second call constructor");
  }
  componentDidMount() {
    console.log("2 - componentDidMount - 2");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("should Component Update -2")
    if(nextProps.count <= 3){
      return true
    }else{
      return false
    }
  }
  render() {
    console.log("second call render");
    return (
        <div>
        <h1>Life - {this.props.count}</h1>        
      </div>
    );
  }
}
