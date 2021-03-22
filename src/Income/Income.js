import React from 'react';

const income = (props) => {
    return (
        <div>
            <h1>Income</h1>
            <p>£{props.income}</p>
            <input type="number" onChange={props.changeHandler} value={props.income} />
        </div>
    )
}

export default income;
