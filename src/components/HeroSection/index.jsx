import React from 'react'
import heroImg from '../../assests/images/hero-image.svg'
import { Button } from '../generalComponents';
import './hero.css'
import { ReactComponent as PlayStore } from "../../assests/icons/playstore.svg";
import { ReactComponent as AppStore } from "../../assests/icons/apple-icon.svg";

const HeroSection = () => {
  return (
    <section className="hero" name='home'>
      <div className="hero__container">
        <div className="hero__left">
          <h4 className="hero__heading">
            You Don’t Save, <span>We Save!</span>
          </h4>
          <h4 className="hero__heading">Your Money, Your Terms.</h4>
          <div className="hero__text">
            Disrupting the traditional financial sector by offering better
            financial solutions, while staying true to the human values of
            trust, honesty, and fairness. Secure your future with our secure
            investments.
          </div>
          <div className="create-btn">
            <Button className={"background-btn"} type="button">
              {" "}
              Create Free Account
            </Button>
          </div>
          <div className="app__btns">
            <Button className={"noBackground-btn left-btn"} type="button">
              <AppStore className="btn-icon" /> Get On Apple
            </Button>
            <Button className={"noBackground-btn"} type="button">
              <PlayStore className="btn-icon" />
              Get On Andriod
            </Button>
          </div>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="hero-img" className="hero__image" />
        </div>
      </div>
    </section>
  );
}

export { HeroSection }