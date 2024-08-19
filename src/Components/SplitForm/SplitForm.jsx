import React, { useState } from 'react'

const SplitForm = (props) => {

    const [bill, setBill] = useState("");
    const [expense, setExpense] = useState("");
    const [pay, setPay] = useState("");

    const BillHandler = (e) => {
        setBill(Number(e.target.value));
    }
    const ExpenseHandler = (e) => {
        setExpense(Number(e.target.value) > bill ? bill - expense : Number(e.target.value)
        );
    }
    const PayHandler = (e) => {
        setPay(e.target.value);
        //console.log(pay);
    }

    const splitHandler = () => {
        if (pay === "You") {
            props.BalanceChanges(Number(expense));
        } else {
            props.BalanceChanges(Number(-expense));
        }
    }
    return (
        <div className='splitform'>
            <h3>Split Bill With {props.selected.name}</h3>
            <div className='form'>


                <div>
                    <label htmlFor="">💰 Bill value : </label>
                    <input type="text" name="" id="" placeholder='Enter Bill : ' onChange={BillHandler} value={bill} />
                </div>
                <div>
                    <label htmlFor="">👩‍🎤 Your Expense : </label>
                    <input type="text" placeholder='Your Expense...' onChange={ExpenseHandler} value={expense} />
                </div>
                <div>
                    <label htmlFor="">👨🏼‍🤝‍👨🏻 {props.selected.name} Expense : </label>
                    <input type="text" value={bill - expense} disabled />
                </div>
                <div>
                    <label htmlFor="">👨🏼‍🤝 Who is paying the bill : </label>
                    <select name="" id="" value={pay} onChange={PayHandler}>
                        <option value="" selected> Choose</option>
                        <option value={`${props.selected.name}`}>{props.selected.name}</option>
                        <option value="You">You</option>
                    </select>
                </div>
                <div>
                    <button className='split-btn' onClick={splitHandler} >Split</button>
                </div>
            </div>
        </div>
    )
}

export default SplitForm
