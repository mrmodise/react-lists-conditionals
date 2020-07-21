import React from 'react';

interface UserInput {
    userInputLength: 0,
    [prop: string]: any
}

function Validation(props: UserInput) {
    let validationMessage = 'Text too short';

    if (props?.userInputLength > 5) {
        validationMessage = 'Text long enough';
    }
    return (
        <div className="App">
            <p>{validationMessage}</p>
        </div>
    );
}

export default Validation;
