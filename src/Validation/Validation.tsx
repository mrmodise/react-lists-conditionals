import React from 'react';

interface UserInput {
    userInputLength: 0
}

function Validation(props: UserInput) {
    return (
        <div className="App">
            <p>{props.userInputLength}</p>
            {
                props?.userInputLength > 5 ?
                    <p>Text long enough</p>
                    :
                    <p>Text too short</p>
            }
        </div>
    );
}

export default Validation;
