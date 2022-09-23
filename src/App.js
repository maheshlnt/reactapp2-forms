import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExp from './components/NewExpense/NewExp';
import NewExpense from './components/NewExpense/NewExpense'; 
 
 
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
      year: "2019"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),year:"2021" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28),
      year: "2020"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      year: "2021"
    },
  ];
  const App=()=>{
    const [expensesx, setExpenses]=useState(DUMMY_EXPENSES);
    const addExpenseHandler=(expense) =>{
      console.log('In App.js');
      console.log(expense);
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses];
      }) ;
    }
  const abc=(expense)=>{
    setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses];
  });
  }
  const filtered=(item)=>{
    setExpenses(res=>{
  return [item,...res];
    })
  }
  // const abc=expense =>{ //writen in above for retriving after submit b
  //   console.log('In App.js');
  //   console.log(expense);
  // }
  // const selectedYear=(year)=>{
  //   alert(year)
  // }
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />       
      {/* <ExpensesFilter onYearSelect={selectedYear}></ExpensesFilter> */}
      <NewExp onAppdata={abc} /> 
      {/* loaded newexpense not expenseform */}
      <Expenses items={expensesx} fil={filtered}/>
    </div>
  ); 
};
export default App;