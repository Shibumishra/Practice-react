import React, { Component } from 'react';


class User extends Component {
    constructor(props) {
        super(props);
        console.log(" constructor")
        this.state = { 
            email: "shibumishra487@gmail.com"
         }
    }
    componentDidMount(){
        console.log("componentDidMount - User")
}
render() { 
    console.log(" render")
        return ( <div>
            <h1>User component</h1>
            <h2>{this.state.email}</h2>
            <button onClick={()=> this.setState({email: "sat2016patna@gmail.com"})}>Click!</button>
        </div> );
    }
}
 
export default User;