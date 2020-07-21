import React from 'react';

interface UserInput {
    character: string,
    [prop: string]: any
}

function Char(props: UserInput) {
    const style: any = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    };

    return (
        <div className="App" style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
}

export default Char;
