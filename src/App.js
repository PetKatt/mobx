import React, { Component } from "react";

export default class App extends Component {
    state = {
        name: "Piotr"
    }
    render() {
        return (
          <div>{this.state.name}</div>  
        );
    }
}
