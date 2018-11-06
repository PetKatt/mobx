import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class App extends Component {
    render() {
        return (
        <div>
            <div>APP COMPONENT</div> 
            <div>{this.props.store.name}</div> 
        </div>
        )
    }
}

export default App
