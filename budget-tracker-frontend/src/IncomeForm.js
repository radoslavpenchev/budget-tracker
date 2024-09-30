import React, { useState } from 'react';
import axios from 'axios';

function IncomeForm({ addIncome }) {
    const [amount, setAmount] = useState('');
    const [source, setSource] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newIncome = { amount: parseFloat(amount), source, description };
        const response = await axios.post('http://127.0.0.1:5000/income', newIncome);
        addIncome(response.data);
        setAmount('');
        setSource('');
        setDescription('');
    };

    return (
        <div className="income-form">
            <h3>Add New Income</h3>
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
                    placeholder="Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Income</button>
            </form>
        </div>
    );
}

export default IncomeForm;
