import React from 'react';

function Validation(props: any) {
    return (
        <div className="App">
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default Validation;
