import React ,{useState,useContext}from 'react';
import { GlobalContext } from '../context/GlobalState'



export const AddTransaction = () => {
  const [text, setText] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const {addTransaction}=useContext(GlobalContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform additional validation or processing here
    // For now, you can log the text and amount to the console
    // console.log('Text:', text);
    // console.log('Amount:', amount);

  
    // setText('');
    // setAmount('');

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};
