import React from 'react';

function Summary({ summary }) {
    return (
        <div className="summary">
            <h3>Budget Summary</h3>
            <p>Total Income: ${summary.total_income}</p>
            <p>Total Expenses: ${summary.total_expenses}</p>
            <p>Balance: ${summary.balance}</p>
        </div>
    );
}

export default Summary;
