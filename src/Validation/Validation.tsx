import React from 'react';

interface UserInput {
    userInputLength: 0,
    [prop: string]: any
}

function Validation(props: UserInput) {
    let validationMessage = 'Text long enough';

    if (props?.userInputLength > 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div className="App">
            <p>{validationMessage}</p>
        </div>
    );
}

export default Validation;
