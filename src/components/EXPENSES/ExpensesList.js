import ExpensesItem from "./ExpensesItem";
import './ExpensesList.css'

const filteredContent = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    return <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpensesItem
            key = {expense.id} 
            title = {expense.title}
            price = {expense.price}
            date = {expense.date} 
          />
        ))}
    </ul>
} 

export default filteredContent ;