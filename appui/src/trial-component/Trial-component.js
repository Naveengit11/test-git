import React from 'react';

const Comp = (props) => {
    return (
        <div>
            <h1>Temp component</h1>
            <p>User : {props.name}</p>
            <p>This is a temp component</p>
        </div>
    )
}

export default Comp;