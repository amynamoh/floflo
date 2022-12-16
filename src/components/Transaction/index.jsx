import React from 'react'
import { Button } from '../generalComponents';
import './transaction.css'
import Transactions from '../../assests/images/Recent transactions.svg'
import TransactionsOverlay from '../../assests/images/transaction-ovelay.svg'

const Transaction = () => {
    return (
      <section className="transactions">
        <div className="transactions__container">
          <div className="transactions__left">
            <h4 className="heading">
              SaveSpace, Your all in one savings application.
            </h4>
            <ul className="transactions__left--list">
              <li className="transactions__left--list-item">
                SaveSpace allows you to track your transactions quick and
                easily.
              </li>
              <li className="transactions__left--list-item">
                SaveSpace products and services are complete and varies in all
                segments according to users needs.
              </li>
              <li className="transactions__left--list-item">
                User friendly and easy navigation savings and investment mobile
                app.
              </li>
            </ul>
            <Button className={"background-btn"}>Try For Free</Button>
          </div>
                <div className="transactions__right">
                    <img src={Transactions} alt="transactions" className="transactions__right--image" />
                    <img src={TransactionsOverlay} alt="overlay" className="transactions__right--overlay" />
          </div>
        </div>
      </section>
    );
}

export  { Transaction }