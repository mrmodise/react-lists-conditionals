import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component<any> {
    state: any = {
        userInput: ''
    };

    inputChanged = (event: any) => {
        this.setState({userInput: event.target.value});
    };

    deleteCharacter = (index: number) => {
        const word = this.state.userInput.split('');
        word.splice(index, 1);
        const newWord = word.join('');
        this.setState({userInput: newWord});

    };

    render() {
        let charList = this.state.userInput
            .split('')
            .map((c: string, index: number) => {
                return <Char character={c} key={index} clicked={() => this.deleteCharacter(index)}/>
            });

        return (
            <div className="App">
                <Validation userInputLength={this.state.userInput.length}/>
                <input type="text" onChange={this.inputChanged} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                {charList}
            </div>
        );
    }
}

export default App;
