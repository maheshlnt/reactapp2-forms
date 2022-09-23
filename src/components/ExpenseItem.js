import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
//import Moment from "moment";
  const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
 
  const clickHandler = () => {
    setTitle(props.title);
    console.log(title);
  };
 
   // const expenseDate = Moment(new Date()).format("Do MMM YYYY");
  // const expenseTitle = "Car Insurance";
 // const expenseAmount = 123.12;
// day, month year logic moved to expesnedate.js
  return (
      <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <h2>{props.title}{props.year}</h2>
      <div className="expense-item__price">${props.amount}</div>
      </div> 
      <button onClick={clickHandler}>change {props.title}</button>
    </Card> 
  );
}

export default ExpenseItem;
