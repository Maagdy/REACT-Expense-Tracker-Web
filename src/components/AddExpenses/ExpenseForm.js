import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props){
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredPrice , setEnteredPrice] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const PriceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const SubmitHandler = (event) =>{
        event.preventDefault();

        // const expensesData = {
        //     title:enteredTitle,
        //     price:enteredPrice,
        //     date: new Date(enteredDate)
        // };
        const expensesData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expensesData)
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

    }


    return <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={TitleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' value={enteredPrice} min=".01" step=".01" onChange={PriceChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  
};

export default ExpenseForm ;