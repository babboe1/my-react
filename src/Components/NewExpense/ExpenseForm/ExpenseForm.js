import React, { useState, useContext } from 'react';
import Context from '../../Context/Context';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [initial, setInitial] = useState("");

   const changeHandler = (e, type) => {
      setInitial((prevState) => {

         if (type === 'date') {
            return {
               ...prevState,
               date: new Date(e.target.value)
            }
         }
         return {
            ...prevState,
            [type]: e.target.value
         }
      })
   };
   const expenseContext = useContext(Context);
   
   const submitHandler = (e) => {
      expenseContext.getDataHandler(initial);
      e.preventDefault();
      e.target.reset();
   }

   return (
      <form onSubmit={submitHandler} className="" action="">
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label htmlFor="">Title</label>
               <input
                  required
                  type="text"
                  onChange={(e) => changeHandler(e, 'title')}
               />
            </div>
            <div className="new-expense__control">
               <label htmlFor="">Amount</label>
               <input
                  required
                  type="number"
                  min="0.01"
                  step="0.01"
                  onChange={(e) => changeHandler(e, 'amount')}
               />
            </div>
            <div className="new-expense__control">
               <label htmlFor="">Date</label>
               <input
                  required
                  type="date"
                  min="2019-01-01"
                  max="2022-12-12"
                  onChange={(e) => changeHandler(e, 'date')}
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="button">Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>
   );
};

export default ExpenseForm;
