import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExp=(props)=>{
 const onsavedata=(data)=>{
    const arr={...data, "id":93}
    props.onAppdata(arr);
 }

    return <div>
        <ExpenseForm onSaveExpenseData={onsavedata}/>
    </div>

}

export default NewExp;