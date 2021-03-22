import React from 'react';

const expenditureList = (props) => {
    return (
        <div>
            <h1>Expenditures</h1>
            <div>{props.expenseList}</div>
            <br />
            <div> Total: £{props.totalExpenditure}</div>
        </div>
    );
}

export default expenditureList;
