import React, { useState, useContext } from 'react'
import { GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {

    const [description, setDescription]:any = useState()
    const [transactionAmount, setTransactionAmount]:any = useState()

    const { addTransaction } = useContext(GlobalContext);


    const onSubmit = (e: {preventDefault:()=> void}) =>{
        e.preventDefault();

        const newTransaction:{id:number, description:any, transactionAmount:number} = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }



    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='from-control'>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input 
                        type='text' 
                        id='description' 
                        placeholder='Detail of transaction'
                        value={description}
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='from-control'>
                    <label htmlFor='transactionamount'>
                        Transaction Amount
                    </label>
                    <input  type='text' 
                            id='transactionamount' 
                            placeholder='Enter transaction amount'
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>
                <button className='btn'>
                    Add Transaction
                </button>
            </form>
            
        </div>
    )
}