import React from 'react';

interface UserInput {
    userInputLength: 0
}

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
};

function Char(props: UserInput) {
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

export default Char;
