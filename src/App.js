import './App.css';
import Income from './Income/Income';
import React, { Component } from 'react';
import AddExpenditure from './AddExpenditure/AddExpenditure';
import ExpenditureList from './ExpenditureList/ExpenditureList';

class App extends Component {
  state = {
    income: 0,
    expenses: [],
    totalExpenditure: 0,
    remaining: 0,
    spend: 0,
    save: 0
  }

  updateRemaining = (income, expenditure) => {
    const remaining = income - expenditure;
    const spend = Math.floor(remaining * 0.35);
    const save = Math.floor(remaining * 0.65);

    this.setState({
      remaining: remaining,
      spend: spend,
      save: save
    })
  }

  incomeChangeHandler = (event) => {
    if(event.target.value !== undefined){
      const income = parseInt(event.target.value);

      this.setState({
        income: income
      });

      this.updateRemaining(income, this.state.totalExpenditure);
    }    
  }

  addExpenditureHandler = () => {
    const name = document.getElementById('expense-name').value;
    const amount = parseInt(document.getElementById('expense-amount').value);

    const newExpense = {name: name, amount: amount};
    const expenses = [...this.state.expenses, newExpense];
    const total = expenses.reduce((a, b) => a + b.amount, 0);

    this.setState({
      expenses: expenses,
      totalExpenditure: total
    });

    this.updateRemaining(this.state.income, total);
  }

  deleteExpenditureHandler = (expenditureIndex) => {
    const expenses = this.state.expenses;
    expenses.splice(expenditureIndex, 1);
    const total = expenses.reduce((a, b) => a + b.amount, 0);

    this.setState({expenses: expenses, totalExpenditure: total});

    this.updateRemaining(this.state.income, total);
  }

  render(){
    const expenseList = this.state.expenses.map((e, index) => <div id={index} onClick={() => this.deleteExpenditureHandler(index)}>{e.name}: £{e.amount}</div>);

    const classes = {
      minHeight: "250px",
      width: "25%",
      float: "left",
      padding: "0px 25px 25px 25px",
      margin: "10px",
      borderStyle: "solid"
    }

    return (
      <div className="App">
        <div style={classes}>
          <Income income={this.state.income} changeHandler={this.incomeChangeHandler} />
        </div>
        
        <div style={classes}>
          <AddExpenditure click={this.addExpenditureHandler} />
        </div>        
                  
        <div style={classes}>
          <h1>Remaining</h1>        
          <div>Total: £{this.state.remaining}</div>
          <br />
          <div>65% Save: £{this.state.save}</div>
          <div>35% Spend: £{this.state.spend}</div> 
        </div>   

        <br style={{clear: "both"}} />

        <div style={classes}>
          <ExpenditureList expenseList={expenseList} totalExpenditure={this.state.totalExpenditure} />
        </div>                   
      </div>
    );
  } 
}

export default App;
