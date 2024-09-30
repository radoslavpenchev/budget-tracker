import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import IncomeForm from './IncomeForm';
import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';
import Summary from './Summary';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [income, setIncome] = useState([]);
    const [summary, setSummary] = useState({ total_income: 0, total_expenses: 0, balance: 0 });

    useEffect(() => {
        fetchExpenses();
        fetchIncome();
        fetchSummary();
    }, []);

    const fetchExpenses = async () => {
        const response = await axios.get('http://127.0.0.1:5000/expenses');
        setExpenses(response.data);
    };

    const fetchIncome = async () => {
        const response = await axios.get('http://127.0.0.1:5000/income');
        setIncome(response.data);
    };

    const fetchSummary = async () => {
        const response = await axios.get('http://127.0.0.1:5000/summary');
        setSummary(response.data);
    };

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
        fetchSummary(); 
    };

    const addIncome = (newIncome) => {
        setIncome([...income, newIncome]);
        fetchSummary(); 
    };

    return (
        <div className="App">
            <h1>Budget Tracker</h1>
            <Summary summary={summary} />

            <div className="forms-container">
                <ExpenseForm addExpense={addExpense} />
                <IncomeForm addIncome={addIncome} />
            </div>

            <div className="list-container">
                <ExpenseList expenses={expenses} />
                <IncomeList income={income} />
            </div>
        </div>
    );
}

export default App;
