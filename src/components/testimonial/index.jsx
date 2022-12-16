import React from "react";
import "./testimonial.css";
import frame from "../../assests/images/Frame-159.svg";
import student from "../../assests/images/student.svg";
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__container">
        <div className="testimonial__left">
          <h4 className="heading">Stay Focused on Your Financial Goals</h4>
          <p className="subheading">
            Improve your financial goals with custom goals that keep you going.
            Save for a home, gadgets, car, education, conquer debt and be on
            your way to financial indepence.
          </p>
          <div className="testimonial__quoute">
            <img src={student} alt="student" className="quote__image" />
            <div>
              <p className="quote">
                <span className="quotemark">“ </span>
                <span>SaveSpace </span>helped me reduce my spending habit. I
                needed money for my house rent so I started saving with
                SaveSpace, I was able to save with discipline.
                <span className="quotemark"> ”</span>
              </p>
              <h4 className="author">
                <span>Ade Lola -</span> Student
              </h4>
            </div>
          </div>
        </div>
        <div className="testimonial__right">
          <img src={frame} alt="frame" className="testimonial__right--image" />
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
