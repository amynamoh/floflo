import React from 'react'
import { Button } from '../generalComponents'
import Woman from '../../assests/images/woman.svg'
// import Overlay from '../../assests/images/Rectangle.svg'
import './whatelse.css'

const Whatelse = () => {
  return (
    <section className="whatelse">
      <div className="whatelse__container">
        <div className="whatelse__left">
          <img
            src={Woman}
            alt="woman-with-phone"
            className="whatelse__left--image"
          />
          {/* <img
            src={Overlay}
            alt="overlay"
            className="whatelse__left--image"
          /> */}
        </div>
        <div className="whatelse__right">
          <h4 className="heading">What else can you do with SaveSpace?</h4>
          <ul className="whatelse__right--list">
            <li className="whatelse__right--list-item">
              Are you scared of participating in ajo, esusu or adashe? SaveSpace
              allows you participate in thrift worry free.
            </li>
            <li className="whatelse__right--list-item">
              Accept payments from all banks. Several features on the app ensure
              maximum guarantee and transparency.
            </li>
            <li className="whatelse__right--list-item">
              SaveSpace allows you to invest your money in different industries,
              with mouth watering ROI.
            </li>
          </ul>
          <Button className={"background-btn"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export  { Whatelse }