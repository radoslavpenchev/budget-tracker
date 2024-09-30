import React from 'react';

function ExpenseList({ expenses }) {
    return (
        <div className="expense-list">
            <h3>Expenses</h3>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.category}: ${expense.amount} - {expense.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
