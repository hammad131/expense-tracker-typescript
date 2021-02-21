import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState'


export const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map((transaction:{transactionAmount:any}) => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc:number, item:number) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}