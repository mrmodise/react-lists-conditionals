import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';

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
                <Validation userInputLength={this.state.userInput.length}/>
                <input type="text" onChange={this.inputChanged} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default App;
