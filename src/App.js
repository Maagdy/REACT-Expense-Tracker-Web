// import React from 'react';
import './App.css';
import Expenses from './components/EXPENSES/Expenses.js';
import NewExpense from './components/AddExpenses/NewExpense.js';
import { useState } from 'react';

const oldExpenses = [
  {
    id:'e1',
    title : 'Books',
    date : new Date (2021, 1 , 1),
    price : 150
  },
  {
    id:'e2',
    title : 'Laptop',
    date : new Date (2020 ,2 , 2),
    price : 1500
  },
  {
    id:'e3',
    title : 'Mobile',
    date : new Date (2020 , 4 , 1),
    price : 999
  },
  {
    id:'e4',
    title : 'TV Screen',
    date : new Date (2019 , 3 , 4),
    price : 1200
  }
];

function App() {
  const [expenses, setExpense] = useState(oldExpenses);

  const AddExpenseHandler = expense => {

    setExpense([expense,...expenses])
    
  }
  
  return (
    <div className="App">
      <h1>Welcome React!</h1>
      <NewExpense onAddExpense = {AddExpenseHandler} />       
      <Expenses items={expenses}/>
    </div>
  );

  // The return sentence back does this code down there but in 'JSX' code 

  // return React.createElement('div', 
  //   {},
  //   React.createElement('h2', {},"welcome react!"),
  //   React.createElement(Expenses,{ items :expenses})
  //   )

}

export default App;
