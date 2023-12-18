import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
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
          <Link className='nav__link' to='classes'>
            Classes
          </Link>
          <Link className='nav__link' to='schedule'>
            Schedule
          </Link>
          <Link className='nav__link' to='pricing'>
            Pricing
          </Link>

          <Link className='nav__link' to='gallery'>
            Gallery
          </Link>
          <Link className='nav__link' to='contact'>
            Contact
          </Link>
        </div>
        <div className='nav__buttons'>
          <Link className='nav__button-link' to='/account'>
            <FontAwesomeIcon icon={faUser} />
            My Account
          </Link>
          <Link className='nav__button-link' to='/contact'>
            <FontAwesomeIcon icon={faSquarePlus} />
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
