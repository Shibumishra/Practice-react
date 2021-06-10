import React, { Component } from 'react';
import "./Event.css";


class Apple extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: "Class component",
            count: 0
         }
    }
    updateValue (){
        alert("apple")
        this.setState({data: "Change class component"})
    }
    updateCount (){
        this.setState({count: this.state.count+1})
    }
    render() { 
        return ( <div>
            <h1>{this.state.data}</h1>
            <button onClick={ () => this.updateValue()}>Click Me</button>
            <hr />
            <h2>Count:<sup className="count">{this.state.count}</sup> </h2>
            <button onClick={()=> {this.updateCount()}}>Click Me</button>
        </div> );
    }
}
 
export default Apple;