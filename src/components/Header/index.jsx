import React, { useState } from 'react'
import Logo from '../../assests/images/save-logo.svg'
import { Link } from 'react-scroll';
import './header.css'
import { Button } from '../generalComponents';
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

    return (
      <header>
        <div className="header__content">
          <div className="header__logo">
            <img src={Logo} alt="header-logo" />
          </div>

          <nav className="nav__desktop">
            <ul className="nav__desktop--list">
              <li className="nav__desktop--item">
                <Link
                  to="home"
                  activeClass="link-active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  // offset={0}
                >
                  Home
                </Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="save">Save</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="busines">Business</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="blog">Blog</Link>
              </li>
              <li className="nav__desktop--item">
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="nav__btns">
            <Button className={"noBackground-btn left-btn"} type="button">
              Login
            </Button>
            <Button className={"background-btn"} type="button">
              Create Free Account
            </Button>
          </div>
          {openNav && (
            <nav className={openNav ? "nav__mobile--active" : "nav__mobile"}>
              <ul className="nav__mobile--list">
                <li className="mobile__item">
                  <Link onClick={() => setOpenNav(!openNav)} to="home">
                    Home
                  </Link>
                </li>
                <li className="mobile__item">
                  <Link to="save" onClick={() => setOpenNav(!openNav)}>
                    Save
                  </Link>
                </li>
                <li className="mobile__item">
                  <Link to="business" onClick={() => setOpenNav(!openNav)}>
                    Business
                  </Link>
                </li>
                <li className="mobile__item">
                  <Link to="blog" onClick={() => setOpenNav(!openNav)}>
                    Blog
                  </Link>
                </li>
                <li className="mobile__item">
                  <Link to="contact" onClick={() => setOpenNav(!openNav)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="mobile__btns">
                <Button
                  className={"noBackground-btn"}
                  type="button"
                  onClick={() => setOpenNav(!openNav)}
                >
                  Login
                </Button>
                <Button
                  className={"background-btn"}
                  type="button"
                  onClick={() => setOpenNav(!openNav)}
                >
                  Create Free Account
                </Button>
              </div>
            </nav>
          )}
          <div
            className={openNav ? "active__toggle" : "toggle__btn"}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
    );
}

export default Header