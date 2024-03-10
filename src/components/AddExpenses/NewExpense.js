import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expensesData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    }; 
    props.onAddExpense(expensesData)
}
    return <div className='New-Expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
};

export default NewExpense;