import { Link } from "react-router-dom";
// import navCSS from "../index.css";
// import Home from "../pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <nav className='nav aqua'>
        <div className='nav__container'>
          <div className='nav__logo'>
            <div>
              <a href='/'>GYM FEAR</a>
            </div>
          </div>
          <div className='nav__links'>
            <Link className='nav__link' to='/'>
              Home
            </Link>
            <Link className='nav__link' to='about'>
              About
            </Link>
            <Link className='nav__link' to='gallery'>
              Gallery
            </Link>
            <Link className='nav__link' to='schedule'>
              Schedule
            </Link>
            <Link className='nav__link' to='blog'>
              Blog
            </Link>
            <Link className='nav__link' to='pricing'>
              Pricing
            </Link>
            <Link className='nav__link' to='classes'>
              Classes
            </Link>
            <Link className='nav__link' to='contact'>
              Contact
            </Link>
          </div>
          <div className='nav__buttons'>
            <div>
              <a className='nav__button nav__sign-up' href='/'>
                <FontAwesomeIcon icon={faUserPlus} />
                <p>My Account</p>
              </a>
            </div>
            <div>
              <a className='nav__button nav__join-class' href='/'>
                <FontAwesomeIcon icon={faSquarePlus} />
                <p>Join Us</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
