import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ addExpense }) {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { amount: parseFloat(amount), category, description };
        const response = await axios.post('http://127.0.0.1:5000/expenses', newExpense);
        addExpense(response.data);
        setAmount('');
        setCategory('');
        setDescription('');
    };

    return (
        <div className="expense-form">
            <h3>Add New Expense</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
