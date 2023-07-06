import React,{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate=new Date(2021,2,28); //2 refers march
  // const expenseTitle="Car insurance";
  // const expensePrice=294.67;
  // const month=props.date.toLocaleString('en-US',{month:"long"});
  // const day=props.date.toLocaleString('en-US',{day:"2-digit"});
  // const year=props.date.getFullYear();
  // const [title,setTitle]=useState(props.title);
  //array destructuring
  // let title=props.title;
  // const clickHandler=()=>{
  //   setTitle("Updated");
  // }
  return (
    <Card className="expense-item">
      
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
      {/* <button onClick={clickHandler} >Change Title</button> */}
    </Card>
  );
} 

export default ExpenseItem;
