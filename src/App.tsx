import React, {Component} from 'react';
import './App.css';

class App extends Component<any> {
    state: any = {
        userInput: ''
    };

    inputChanged = (event: any) => {
        this.setState({userInput: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.inputChanged} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default App;
