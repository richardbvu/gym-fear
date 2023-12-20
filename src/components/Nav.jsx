import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquarePlus,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Nav = () => {
  const navRefLinks = useRef();
  const navRefButtons = useRef();

  const showNavBar = () => {
    navRefLinks.current.classList.toggle("active");
    navRefButtons.current.classList.toggle("active");
  };

  const noShowNavBar = () => {
    navRefLinks.current.classList.toggle("active");
    navRefButtons.current.classList.toggle("active");
  };
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__logo'>
          <div>
            <a href='/'>GYM FEAR</a>
          </div>
        </div>
        <div ref={navRefLinks} className='nav__links'>
          <Link className='nav__link' to='/' onClick={noShowNavBar}>
            Home
          </Link>
          <Link className='nav__link' to='about' onClick={noShowNavBar}>
            About
          </Link>
          <Link className='nav__link' to='classes' onClick={noShowNavBar}>
            Classes
          </Link>
          <Link className='nav__link' to='schedule' onClick={noShowNavBar}>
            Schedule
          </Link>
          <Link className='nav__link' to='pricing' onClick={noShowNavBar}>
            Pricing
          </Link>
          <Link className='nav__link' to='gallery' onClick={noShowNavBar}>
            Gallery
          </Link>
          <Link className='nav__link' to='contact' onClick={noShowNavBar}>
            Contact
          </Link>
        </div>
        <div ref={navRefButtons} className='nav__buttons'>
          <Link
            className='nav__button-link'
            to='/account'
            onClick={noShowNavBar}
          >
            <FontAwesomeIcon icon={faUser} />
            My Account
          </Link>
          <Link
            className='nav__button-link'
            to='/contact'
            onClick={noShowNavBar}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            Join Us
          </Link>
        </div>
        <div className='nav__toggle'>
          <FontAwesomeIcon icon={faBars} id='nav-icon' onClick={showNavBar} />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
