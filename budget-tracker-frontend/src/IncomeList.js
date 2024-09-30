import React from 'react';

function IncomeList({ income }) {
    return (
        <div className="income-list">
            <h3>Income</h3>
            <ul>
                {income.map(inc => (
                    <li key={inc.id}>
                        {inc.source}: ${inc.amount} - {inc.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IncomeList;
