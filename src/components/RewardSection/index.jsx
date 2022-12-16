import React from 'react'

import Phone from '../../assests/images/phone-app.svg'
import { Button } from '../generalComponents';
import './reward.css'
import userAdd from '../../assests/icons/user-add.svg'
import walletAdd from '../../assests/icons/wallet-add.svg'
import cardAdd from '../../assests/icons/card-add.svg'
import People from '../../assests/icons/people.svg'

const RewardSection = () => {
  return (
    <section className="reward">
      <div className="reward__container">
        <div className="reward__left">
          <img src={Phone} alt="display-mobile" className="reward__image" />
        </div>

        <div className="reward__right">
          <div className="reward__right--heading">
            <h4 className="h4">
              Rewarding Your Every Step Of Financial journey
            </h4>
          </div>
          <p className="reward__right--subheading">
            We have your back! You can count on us too. We want to give you the
            freedom of opening a save and secure savings and investment account
            with ₦0.
          </p>
          <div className="reward__list">
            <div className="reward__list--item">
              <img src={userAdd} alt="" className="list__icon" />
              <p className="list__item--text">
                Create a SaveSpace account to get started. It’s free!!!{" "}
              </p>
            </div>
            <div className="reward__list--item">
              <img src={cardAdd} alt="" className="list__icon" />
              <p className="list__item--text">
                Link your bank account to your SaveSpace account. Don’t worry
                your details are safe with us.
              </p>
            </div>
            <div className="reward__list--item">
              <img src={walletAdd} alt="" className="list__icon" />
              <p className="list__item--text">
                Start saving!!! You don’t have to worry about late payments, you
                can tell us to automatically save for you.
              </p>
            </div>
            <div className="reward__list--item">
              <img src={People} alt="" className="list__icon" />
              <p className="list__item--text">
                Participate in thrifts (ajo, esusu and adashe) with your family
                and friends. Create a thrift plan and invite your friends to
                join you.
              </p>
            </div>
          </div>

          <Button className='background-btn'>Try For Free</Button>
        </div>
      </div>
    </section>
  );
}

export { RewardSection }