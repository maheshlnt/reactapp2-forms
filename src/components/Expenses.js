import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import Card from "./Card";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
      setfilteredYear(selectedYear)
    console.log(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>
   expense.date.getFullYear().toString()===filteredYear
  );
  // 2.filtering data code
  let expensesContent = <p>No Expenses Found</p>;
  if(filteredExpenses.length>0) {
  expensesContent= (filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  )))}// end
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
      {/* {props.items.map((expense) => ( */}
      {/* //written same code in above function ***1. filtering data code
      {filteredExpenses.length===0 && <p>No Expenses Found</p>}
      {filteredExpenses.length>0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))} end code */}
      {/* {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))} */}

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount} 
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
