import React from 'react';

const addExpenditure = (props) => {
    return (
        <div>
            <h1>Add Expenditure</h1>
            <div>Name</div>
            <input id="expense-name" type="text" />            
            <div>Amount</div>
            <input id="expense-amount" type="text" />
            <br /><br />
            <button onClick={props.click}>Add</button>
        </div>
    );
}

export default addExpenditure;
