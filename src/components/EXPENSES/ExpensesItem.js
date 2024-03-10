import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css'

function ExpensesItem (props){
    return (
    <Card className="Expense_Item">
        <div className='Date'>
            <ExpenseDate date={props.date} />
        </div>
        <div className="Expense_Item_Description">
        <h2>{props.title}</h2>
        <div className="Expense_Item_Price">$ {props.price}</div>
        </div>
    </Card>);
}

export default ExpensesItem ;