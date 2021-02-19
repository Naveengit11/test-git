import React, {useState} from 'react';

const Comp = (props) => {
    const [name] = useState('Naveen2');
    return (
        <div>
            <h1>Temp component</h1>
            <p>User : {props.name}</p>
            <p> From state : {name} </p>
            <p>This is a temp component</p>
        </div>
    )
}
//comment
export default Comp;