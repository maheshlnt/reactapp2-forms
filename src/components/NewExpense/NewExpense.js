import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.round(Math.random().toString()* 100)
        }; //expenseform
        props.onAddExpense(expenseData)  // lifting up data to parent app.js
        //console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;


